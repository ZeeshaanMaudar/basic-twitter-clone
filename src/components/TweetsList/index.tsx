import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTweetsStartAsync } from '../../redux/tweets/tweetsActions';
import { selectIsFetchingTweets, selectTweetsList, selectErrorFetchingTweets } from '../../redux/tweets/tweetsSelectors';

import { fetchUsersStartAsync } from '../../redux/users/usersActions';
import { selectIsFetchingUsers, selectUsersList, selectErrorFetchingUsers } from '../../redux/users/usersSelectors';

import Tweet from '../Tweet';

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
interface CardArgs {
  tweetsList: TweetProps[],
  usersList: User[]
}

const callTweetsList = ({ tweetsList, usersList }: CardArgs) => {

  if (tweetsList.length > 0) {

    return tweetsList.map(tweetItem => {

      const { id, userId } = tweetItem;

      const userArray = usersList.filter(user => user.id === userId);
      const user = userArray[0];

      return (
        <Tweet key={id} {...{ tweetItem, user }} />
      );
    });
  }

  return (
    <div>No tweets to display today</div>
  );
}

const TweetsList = () => {

  const dispatch = useDispatch();
  const loadingTweets = useSelector(selectIsFetchingTweets);
  const tweetsList = useSelector(selectTweetsList);
  const tweetsError = useSelector(selectErrorFetchingTweets);

  const loadingUsers = useSelector(selectIsFetchingUsers);
  const usersList = useSelector(selectUsersList);
  const usersError = useSelector(selectErrorFetchingUsers);

  useEffect(() => {
    fetchTweets();
    fetchUsers();
  }, []);

  const fetchTweets = () => {
    dispatch(fetchTweetsStartAsync());
  }

  const fetchUsers = () => {
    dispatch(fetchUsersStartAsync());
  }

  if (tweetsError || usersError) {
    return <h1>Something went wrong!</h1>;
  }

  if (loadingTweets || loadingUsers) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {callTweetsList({ tweetsList, usersList })}
    </div>
  );
}

export default TweetsList;
