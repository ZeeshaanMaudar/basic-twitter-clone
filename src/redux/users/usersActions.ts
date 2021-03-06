import axios from 'axios';

import * as actionTypes from './usersActionTypes';

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

// fetch users list
export const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (usersList: User[]) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: usersList
});

export const fetchUsersFailure = (error: string) => ({
  type: actionTypes.FETCH_USERS_FAILURE,
  payload: error
});

export const fetchUsersStartAsync = () => {

  return (dispatch: any) => {

    dispatch(fetchUsersRequest());

    const endpoint = `${process.env.REACT_APP_API}/users`;

    axios.get(endpoint)
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error));
      })
  }
};

// fetch users details list
export const fetchUsersDetailsRequest = () => ({
  type: actionTypes.FETCH_USERS_DETAILS_REQUEST,
});

export const fetchUsersDetailsSuccess = (usersDetailsList: UserDetails[]) => ({
  type: actionTypes.FETCH_USERS_DETAILS_SUCCESS,
  payload: usersDetailsList
});

export const fetchUsersDetailsFailure = (error: string) => ({
  type: actionTypes.FETCH_USERS_DETAILS_FAILURE,
  payload: error
});

export const fetchUsersDetailsStartAsync = () => {

  return (dispatch: any) => {

    dispatch(fetchUsersDetailsRequest());

    const endpoint = `${process.env.REACT_APP_API}/usersDetails`;

    axios.get(endpoint)
      .then(response => {
        dispatch(fetchUsersDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUsersDetailsFailure(error));
      })
  }
};
