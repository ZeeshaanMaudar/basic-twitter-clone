import axios from 'axios';
import moment from 'moment';

import * as actionTypes from './tweetsActionTypes';

import { TweetType } from '../../common/interface';

interface TweetAndCount {
  tweets: TweetType[],
  count: number
}

// fetch tweets request
export const fetchTweetsRequest = () => ({
  type: actionTypes.FETCH_TWEETS_REQUEST,
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
        dispatch(fetchTweetsFailure(error.message));
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

    const currentDate = moment(new Date()).format('YYYY-MM-DD, h:mm:ss a');

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
          dispatch(postTweetFailure(error.message));
      })
  }
};

// update tweet claps
export const updateTweetClapsRequest = () => ({
  type: actionTypes.UPDATE_TWEET_CLAPS_REQUEST,
});

export const updateTweetClapsSuccess = (currentId: number) => ({
  type: actionTypes.UPDATE_TWEET_CLAPS_SUCCESS,
  payload: currentId
});

export const updateTweetClapsFailure = (error: string) => ({
  type: actionTypes.UPDATE_TWEET_CLAPS_FAILURE,
  payload: error
});

export const updateTweetClapsStartAsync = (id: number, newTweetItem: TweetType) => {

  return (dispatch: any) => {

    dispatch(updateTweetClapsRequest());

    const endpoint = `${process.env.REACT_APP_API}/tweets/${id}`;

    axios.put(endpoint, newTweetItem)
      .then((response) => {
        dispatch(updateTweetClapsSuccess(response.data.id));
      })
      .catch(error => {
        dispatch(updateTweetClapsFailure(error.message));
      })
  }
};

// delete own tweet
export const deleteTweetRequest = () => ({
  type: actionTypes.DELETE_TWEET_REQUEST,
});

export const deleteTweetSuccess = () => ({
  type: actionTypes.DELETE_TWEET_SUCCESS
});

export const deleteTweetFailure = (error: string) => ({
  type: actionTypes.DELETE_TWEET_FAILURE,
  payload: error
});

export const deleteTweetStartAsync = (id: number) => {

  return (dispatch: any) => {

    dispatch(deleteTweetRequest());

    const endpoint = `${process.env.REACT_APP_API}/tweets/${id}`;

    axios.delete(endpoint)
      .then(() => {
          dispatch(deleteTweetSuccess());
      })
      .catch(error => {
          dispatch(deleteTweetFailure(error.message));
      })
  }
};

// fetch single user tweets list
export const fetchSingleUserTweetsRequest = () => ({
  type: actionTypes.FETCH_SINGLE_TWEETS_REQUEST,
});

export const fetchSingleUserTweetsSuccess = ({ tweets, count }: TweetAndCount) => ({
  type: actionTypes.FETCH_SINGLE_TWEETS_SUCCESS,
  payload: { tweets, count }
});

export const fetchSingleUserTweetsFailure = (error: string) => ({
  type: actionTypes.FETCH_SINGLE_TWEETS_FAILURE,
  payload: error
});

export const fetchSingleUserTweetsStartAsync = (page: number, limit: number, userId: number) => {

  return (dispatch: any) => {

    dispatch(fetchSingleUserTweetsRequest());

    const endpoint = `${process.env.REACT_APP_API}/tweets?userId=${userId}&_sort=date&_order=desc&_page=${page}&_limit=${limit}`;

    axios.get(endpoint)
      .then(response => {
        dispatch(fetchSingleUserTweetsSuccess({ tweets: response.data, count: response.headers['x-total-count'] }));
      })
      .catch(error => {
        dispatch(fetchSingleUserTweetsFailure(error.message));
      })
  }
};

// fetch single user entire tweets list
export const fetchUserEntireTweetsRequest = () => ({
  type: actionTypes.FETCH_ALL_SINGLE_TWEETS_REQUEST,
});

export const fetchUserEntireTweetsSuccess = (tweetsList: TweetType[]) => ({
  type: actionTypes.FETCH_ALL_SINGLE_TWEETS_SUCCESS,
  payload: tweetsList
});

export const fetchUserEntireTweetsFailure = (error: string) => ({
  type: actionTypes.FETCH_ALL_SINGLE_TWEETS_FAILURE,
  payload: error
});

export const fetchUserEntireTweetsStartAsync = (userId: number) => {

  return (dispatch: any) => {

    dispatch(fetchUserEntireTweetsRequest());

    const endpoint = `${process.env.REACT_APP_API}/tweets?userId=${userId}&_sort=date&_order=desc`;

    axios.get(endpoint)
      .then(response => {
        dispatch(fetchUserEntireTweetsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUserEntireTweetsFailure(error.message));
      })
  }
};
