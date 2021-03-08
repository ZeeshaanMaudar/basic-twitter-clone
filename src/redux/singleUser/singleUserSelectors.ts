import { createSelector } from 'reselect';

import { User, UserDetails } from '../../common/interface';

interface State {
  singleUser: {
    isFetchingUser: boolean,
    user: User,
    errorUser: string,
    isFetchingSingleUserDetails: boolean,
    userDetails: UserDetails
    errorUserDetails: string
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

// single user details 
export const selectIsFetchingSingleUserDetails = createSelector(
  [selectUserState],
  singleUser => singleUser.isFetchingSingleUserDetails
);

export const selectUserDetails = createSelector(
  [selectUserState],
  singleUser => singleUser.userDetails
);

export const selectErrorFetchingUserDetails = createSelector(
  [selectUserState],
  singleUser => singleUser.errorUserDetails
);
