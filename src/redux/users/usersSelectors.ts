import { createSelector } from 'reselect';

import { User, UserDetails } from '../../common/interface';

interface State {
  users: {
    isFetchingUsers: boolean,
    usersList: User[],
    errorUsers: string,
    isFetchingUsersDetails: boolean,
    usersDetailsList: UserDetails[]
    errorUsersDetails: string
  }
}

const selectUsers = (state: State) => state.users;

// users
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
  users => users.errorUsers
);

// users details 
export const selectIsFetchingUsersDetails = createSelector(
  [selectUsers],
  users => users.isFetchingUsersDetails
);

export const selectUsersDetailsList = createSelector(
  [selectUsers],
  users => users.usersDetailsList
);

export const selectErrorFetchingUsersDetails = createSelector(
  [selectUsers],
  users => users.errorUsersDetails
);
