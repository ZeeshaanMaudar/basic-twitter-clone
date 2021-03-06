import axios from 'axios';

import * as actionTypes from './tweetsActionTypes';

export const fetchTweetsRequest = () => ({
  type: actionTypes.FETCH_TWEETS_FAILURE,
});

export const fetchTweetsSuccess = (tweets: string[]) => ({
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
