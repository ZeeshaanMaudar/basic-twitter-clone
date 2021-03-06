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

// fetch tweets request
export const fetchTweetsRequest = () => ({
  type: actionTypes.FETCH_TWEETS_FAILURE,
});

export const fetchTweetsSuccess = (tweets: Tweet[]) => ({
  type: actionTypes.FETCH_TWEETS_SUCCESS,
  payload: tweets
});

export const fetchTweetsFailure = (error: string) => ({
  type: actionTypes.FETCH_TWEETS_FAILURE,
  payload: error
});

export const fetchTweetsStartAsync = () => {

  return (dispatch: any) => {

    dispatch(fetchTweetsRequest());

    const endpoint = `${process.env.REACT_APP_API}/tweets`;

    axios.get(endpoint)
      .then(response => {
          dispatch(fetchTweetsSuccess(response.data));
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