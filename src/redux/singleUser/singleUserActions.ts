import axios from 'axios';

import * as actionTypes from './singleUserActionTypes';

interface User {
  id: number,
  username: string,
  role: string,
  usersDetailsId: number,
  profilePic: string
}

// fetch users list
export const fetchSingleUserRequest = () => ({
  type: actionTypes.FETCH_SINGLE_USER_REQUEST,
});

export const fetchSingleUserSuccess = (usersList: User[]) => ({
  type: actionTypes.FETCH_SINGLE_USER_SUCCESS,
  payload: usersList
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
        dispatch(fetchSingleUserFailure(error));
      })
  }
};
