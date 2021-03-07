import { createSelector } from 'reselect';

interface User {
  id: number,
  username: string,
  role: string,
  usersDetailsId: number,
  profilePic: string
}

interface State {
  singleUser: {
    isFetchingUser: boolean,
    user: User,
    errorUser: string,
  }
}

const selectUserState = (state: State) => state.singleUser;

// user
export const selectIsFetchingUser = createSelector(
  [selectUserState],
  singleUser => singleUser.isFetchingUser
);

export const selectUser= createSelector(
  [selectUserState],
  singleUser => singleUser.user
);

export const selectErrorFetchingUser = createSelector(
  [selectUserState],
  singleUser => singleUser.errorUser
);
