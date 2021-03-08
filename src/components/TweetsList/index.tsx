import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  selectIsFetchingTweets,
  selectTweetsList,
  selectErrorFetchingTweets,
  selectIsPosting,
  selectSuccessfullyPosted,
  selectErrorPosting,
  selectIsDeleting,
  selectSuccessfullyDeleted,
  selectErrorDeleting
} from '../../redux/tweets/tweetsSelectors';

import { fetchUsersStartAsync, fetchUsersDetailsStartAsync } from '../../redux/users/usersActions';
import { selectIsFetchingUsers, selectUsersList, selectErrorFetchingUsers, selectIsFetchingUsersDetails, selectUsersDetailsList, selectErrorFetchingUsersDetails } from '../../redux/users/usersSelectors';

import { selectUser, selectUserDetails } from '../../redux/singleUser/singleUserSelectors';
import { fetchTweetsStartAsync, fetchSingleUserTweetsStartAsync } from '../../redux/tweets/tweetsActions';

import Tweet from '../Tweet';

import { Wrapper, Title } from './styled';

interface TweetListProps {
  page: number,
  limit: number,
  singleUser: boolean
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
  usersDetailsList: UserDetails[],
  singleUser: boolean,
  user: User,
  userDetails: UserDetails
}

const callTweetsList = ({ tweetsList, usersList, usersDetailsList, singleUser, user, userDetails }: CardArgs) => {

  if (tweetsList.length > 0) {

    return tweetsList.map(tweetItem => {

      const { id, userId } = tweetItem;

        if (singleUser) {
          return (
            <Tweet key={id} {...{ tweetItem, user, userDetails }} />
          );
        } else {

          const userArray = usersList.filter(user => user.id === userId);
          const userItem = userArray[0];

          const userDetailsArray = usersDetailsList.filter(userDetail => userDetail.id === userItem.usersDetailsId);
          const userDetailsItem = userDetailsArray[0];

          return (
            <Tweet key={id} {...{ tweetItem, user: userItem, userDetails: userDetailsItem }} />
          );

        }

    });
  }

  return (
    <div>No tweets to display today</div>
  );
}

const callTitle = (singleUser: boolean) => {
  
  if (singleUser) {
    return <Title>Tweets</Title>;
  }

  return <Title>Latest Tweets</Title>;
}

const TweetsList: FC<TweetListProps> = ({ page, limit, singleUser }) => {

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

  const isDeleting = useSelector(selectIsDeleting);
  const deleted = useSelector(selectSuccessfullyDeleted);
  const errorDeleting = useSelector(selectErrorDeleting);

  const user = useSelector(selectUser);
  const userDetails = useSelector(selectUserDetails);

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    fetchTweetsDetails();
  }, [page, limit]);

  useEffect(() => {

    if (posted || deleted) {
      fetchTweetsDetails();
    }

  }, [posted, deleted]);

  const fetchTweetsDetails = () => {
    if (singleUser) {
      dispatch(fetchSingleUserTweetsStartAsync(page, limit, Number(userId)));
    } else {
      dispatch(fetchTweetsStartAsync(page, limit));
      dispatch(fetchUsersStartAsync());
      dispatch(fetchUsersDetailsStartAsync());
    }
  }

  if (tweetsError || usersError || usersDetailsError || errorPosting || errorDeleting) {
    return <h1>Something went wrong!</h1>;
  }

  if (loadingTweets || loadingUsers || loadingUsersDetails || isPosting || isDeleting) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      {callTitle(singleUser)}
      {callTweetsList({ tweetsList, usersList, usersDetailsList, singleUser, user, userDetails })}
    </Wrapper>
  );
}

export default TweetsList;
