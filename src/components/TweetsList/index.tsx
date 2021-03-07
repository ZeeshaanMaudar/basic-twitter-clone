import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTweetsStartAsync } from '../../redux/tweets/tweetsActions';
import {
  selectIsFetchingTweets,
  selectTweetsList,
  selectErrorFetchingTweets,
  selectIsPosting,
  selectSuccessfullyPosted,
  selectErrorPosting,
  selectIsUpdating,
  selectSuccessfullyUpdated,
  selectErrorUpdating
} from '../../redux/tweets/tweetsSelectors';

import { fetchUsersStartAsync, fetchUsersDetailsStartAsync } from '../../redux/users/usersActions';
import { selectIsFetchingUsers, selectUsersList, selectErrorFetchingUsers, selectIsFetchingUsersDetails, selectUsersDetailsList, selectErrorFetchingUsersDetails } from '../../redux/users/usersSelectors';

import Tweet from '../Tweet';

interface TweetListProps {
  page: number,
  limit: number
}

interface TweetProps {
  id: number,
  tweet: string,
  date: string,
  claps: number,
  userId: number
}
interface User {
  id: number,
  username: string,
  role: string,
  usersDetailsId: number,
  profilePic: string
}

interface UserDetails {
  id: number,
  firstName: string,
  lastName: string,
  birthday: string
}
interface CardArgs {
  tweetsList: TweetProps[],
  usersList: User[],
  usersDetailsList: UserDetails[]
}

const callTweetsList = ({ tweetsList, usersList, usersDetailsList }: CardArgs) => {

  if (tweetsList.length > 0) {

    return tweetsList.map(tweetItem => {

      const { id, userId } = tweetItem;

      const userArray = usersList.filter(user => user.id === userId);
      const user = userArray[0];

      const userDetailsArray = usersDetailsList.filter(userDetail => userDetail.id === user.usersDetailsId);
      const userDetails = userDetailsArray[0];

      return (
        <Tweet key={id} {...{ tweetItem, user, userDetails }} />
      );
    });
  }

  return (
    <div>No tweets to display today</div>
  );
}

const TweetsList: FC<TweetListProps> = ({ page, limit }) => {

  const dispatch = useDispatch();
  const loadingTweets = useSelector(selectIsFetchingTweets);
  const tweetsList = useSelector(selectTweetsList);
  const tweetsError = useSelector(selectErrorFetchingTweets);

  const loadingUsers = useSelector(selectIsFetchingUsers);
  const usersList = useSelector(selectUsersList);
  const usersError = useSelector(selectErrorFetchingUsers);

  const loadingUsersDetails = useSelector(selectIsFetchingUsersDetails);
  const usersDetailsList = useSelector(selectUsersDetailsList);
  const usersDetailsError = useSelector(selectErrorFetchingUsersDetails);

  const isPosting = useSelector(selectIsPosting);
  const posted = useSelector(selectSuccessfullyPosted);
  const errorPosting = useSelector(selectErrorPosting);

  const isUpdating = useSelector(selectIsUpdating);
  const updated = useSelector(selectSuccessfullyUpdated);
  const errprUpdating = useSelector(selectErrorUpdating);

  useEffect(() => {
    fetchTweetsDetails();
  }, [page, limit]);

  useEffect(() => {

    if (posted || updated) {
      fetchTweetsDetails();
    }
    
  }, [posted, updated]);

  const fetchTweetsDetails = () => {
    dispatch(fetchTweetsStartAsync(page, limit));
    dispatch(fetchUsersStartAsync());
    dispatch(fetchUsersDetailsStartAsync());
  }

  if (tweetsError || usersError || usersDetailsError || errorPosting || errprUpdating) {
    return <h1>Something went wrong!</h1>;
  }

  if (loadingTweets || loadingUsers || loadingUsersDetails || isPosting || isUpdating) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {callTweetsList({ tweetsList, usersList, usersDetailsList })}
    </div>
  );
}

export default TweetsList;
