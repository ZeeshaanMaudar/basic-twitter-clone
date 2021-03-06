import axios from 'axios';

import * as actionTypes from './usersActionTypes';

interface User {
  id: number,
  username: string,
  role: string,
  usersDetailsId: number,
  profilePic: string
}

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
