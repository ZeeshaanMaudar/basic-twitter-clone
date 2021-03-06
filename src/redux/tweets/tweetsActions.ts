import axios from 'axios';
import moment from 'moment';

import * as actionTypes from './tweetsActionTypes';

interface Tweet {
  id: number,
  tweet: string,
  date: string,
  claps: number,
  userId: number
}

interface TweetAndCount {
  tweets: Tweet[],
  count: number
}

// fetch tweets request
export const fetchTweetsRequest = () => ({
  type: actionTypes.FETCH_TWEETS_FAILURE,
});

export const fetchTweetsSuccess = ({ tweets, count }: TweetAndCount) => ({
  type: actionTypes.FETCH_TWEETS_SUCCESS,
  payload: { tweets, count }
});

export const fetchTweetsFailure = (error: string) => ({
  type: actionTypes.FETCH_TWEETS_FAILURE,
  payload: error
});

export const fetchTweetsStartAsync = (page: number, limit: number) => {

  return (dispatch: any) => {

    dispatch(fetchTweetsRequest());

    const endpoint = `${process.env.REACT_APP_API}/tweets?_sort=date&_order=desc&_page=${page}&_limit=${limit}`;

    axios.get(endpoint)
      .then(response => {
        dispatch(fetchTweetsSuccess({ tweets: response.data, count: response.headers['x-total-count'] }));
      })
      .catch(error => {
        dispatch(fetchTweetsFailure(error));
      })
  }
};

// post a new tweet
export const postTweetRequest = () => ({
  type: actionTypes.POST_TWEET_REQUEST,
});

export const postTweetSuccess = () => ({
  type: actionTypes.POST_TWEET_SUCCESS
});

export const postTweetFailure = (error: string) => ({
  type: actionTypes.POST_TWEET_FAILURE,
  payload: error
});

export const postTweetStartAsync = (tweet: string) => {

  return (dispatch: any) => {

    dispatch(postTweetRequest());

    const endpoint = `${process.env.REACT_APP_API}/tweets`;

    const currentDate = moment(new Date()).format('YYYY-MM-DD');

    const tweetData = {
      tweet,
      date: currentDate,
      claps: 0,
      userId: 1,
    }

    axios.post(endpoint, tweetData)
      .then(() => {
          dispatch(postTweetSuccess());
      })
      .catch(error => {
          dispatch(postTweetFailure(error));
      })
  }
};
