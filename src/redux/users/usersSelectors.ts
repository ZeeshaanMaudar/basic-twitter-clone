import { createSelector } from 'reselect';

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
interface State {
  users: {
    isFetchingUsers: boolean,
    usersList: User[],
    errorUsers: string | null,
    isFetchingUsersDetails: boolean,
    usersDetailsList: UserDetails[]
    errorUsersDetails: string | null
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
