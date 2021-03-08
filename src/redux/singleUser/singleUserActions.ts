import axios from 'axios';

import * as actionTypes from './singleUserActionTypes';
import { User, UserDetails } from '../../common/interface';

// fetch users list
export const fetchSingleUserRequest = () => ({
  type: actionTypes.FETCH_SINGLE_USER_REQUEST,
});

export const fetchSingleUserSuccess = (user: User) => ({
  type: actionTypes.FETCH_SINGLE_USER_SUCCESS,
  payload: user
});

export const fetchSingleUserFailure = (error: string) => ({
  type: actionTypes.FETCH_SINGLE_USER_FAILURE,
  payload: error
});

export const fetchSingleUserStartAsync = (userId: number) => {

  return (dispatch: any) => {

    dispatch(fetchSingleUserRequest());

    const endpoint = `${process.env.REACT_APP_API}/users/${userId}`;

    axios.get(endpoint)
      .then(response => {
        dispatch(fetchSingleUserSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchSingleUserFailure(error.message));
      })
  }
};

// fetch single user details list
export const fetchSingleUserDetailsRequest = () => ({
  type: actionTypes.FETCH_SINGLE_USER_DETAILS_REQUEST,
});

export const fetchSingleUserDetailsSuccess = (userDetails: UserDetails) => ({
  type: actionTypes.FETCH_SINGLE_USER_DETAILS_SUCCESS,
  payload: userDetails
});

export const fetchSingleUserDetailsFailure = (error: string) => ({
  type: actionTypes.FETCH_SINGLE_USER_DETAILS_FAILURE,
  payload: error
});

export const fetchSingleUserDetailsStartAsync = (userDetailsId: number) => {

  return (dispatch: any) => {

    dispatch(fetchSingleUserDetailsRequest());

    const endpoint = `${process.env.REACT_APP_API}/usersDetails/${userDetailsId}`;

    axios.get(endpoint)
      .then(response => {
        dispatch(fetchSingleUserDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchSingleUserDetailsFailure(error.message));
      })
  }
};
