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

import { User, UserDetails, TweetType } from '../../common/interface';

import { Wrapper, Title, Spinner } from './styled';

interface TweetListProps {
  page: number,
  limit: number,
  profileView: boolean
}

interface CardArgs {
  tweetsList: TweetType[],
  usersList: User[],
  usersDetailsList: UserDetails[],
  profileView: boolean,
  user: User,
  userDetails: UserDetails
}

const callTweetsList = ({ tweetsList, usersList, usersDetailsList, profileView, user, userDetails }: CardArgs) => {

  if (tweetsList.length > 0) {

    return tweetsList.map(tweetItem => {

      const { id, userId } = tweetItem;

        if (profileView) {
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

const callTitle = (profileView: boolean) => {
  
  if (profileView) {
    return <Title>Tweets</Title>;
  }

  return <Title>Latest Tweets</Title>;
}

const TweetsList: FC<TweetListProps> = ({ page, limit, profileView }) => {

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
    if (profileView) {
      dispatch(fetchSingleUserTweetsStartAsync(page, limit, Number(userId)));
    } else {
      dispatch(fetchTweetsStartAsync(page, limit));
      dispatch(fetchUsersStartAsync());
      dispatch(fetchUsersDetailsStartAsync());
    }
  }

  if (tweetsError) {
    return <h1>{tweetsError}</h1>;
  }

  if (usersError) {
    return <h1>{usersError}</h1>;
  }

  if (usersDetailsError) {
    return <h1>{usersDetailsError}</h1>;
  }

  if (errorPosting) {
    return <h1>{errorPosting}</h1>;
  }
  
  if (errorDeleting) {
    return <h1>{errorDeleting}</h1>;
  }

  if (loadingTweets || loadingUsers || loadingUsersDetails || isPosting || isDeleting) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      {callTitle(profileView)}
      {callTweetsList({ tweetsList, usersList, usersDetailsList, profileView, user, userDetails })}
    </Wrapper>
  );
}

export default TweetsList;
