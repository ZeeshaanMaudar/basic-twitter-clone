import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTweetsStartAsync } from '../../redux/tweets/tweetsActions';
import { selectIsFetchingTweets, selectTweetsList, selectErrorFetchingTweets } from '../../redux/tweets/tweetsSelectors';

import Tweet from '../Tweet';

interface TweetProps {
  id: number,
  tweet: string,
  date: string,
  claps: number,
  userId: number
}

const callTweetsList = (tweetsList: TweetProps[]) => {

  if (tweetsList.length > 0) {

    return tweetsList.map(tweetItem => {
      return (
        <Tweet key={tweetItem.id} {...{ tweetItem }} />
      );
    });
  }

  return (
    <div>No tweets to display today</div>
  );
}

const TweetsList = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectIsFetchingTweets);
  const tweetsList = useSelector(selectTweetsList);
  const error = useSelector(selectErrorFetchingTweets);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = () => {
    dispatch(fetchTweetsStartAsync());
  }

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {callTweetsList(tweetsList)}
    </div>
  );
}

export default TweetsList;
