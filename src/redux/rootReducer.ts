import { combineReducers } from 'redux';

import tweetsReducer from './tweets/tweetsReducer';
import usersReducer from './users/usersReducer';
import singleUserReducer from './singleUser/singleUserReducer';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
  singleUser: singleUserReducer
});

export default rootReducer;
