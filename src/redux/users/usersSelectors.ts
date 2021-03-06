import { createSelector } from 'reselect';

interface State {
  users: {
    isFetchingUsers: false,
    usersList: [],
    error: null
  }
}

const selectUsers = (state: State) => state.users;

export const selectIsFetchingUsers = createSelector(
  [selectUsers],
  users => users.isFetchingUsers
);

export const selectUsersList = createSelector(
  [selectUsers],
  users => users.usersList
);

export const selectErrorFetchingUsers = createSelector(
  [selectUsers],
  users => users.error
);
