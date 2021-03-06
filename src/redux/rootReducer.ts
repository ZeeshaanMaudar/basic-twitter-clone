import { combineReducers } from 'redux';

import tweetsReducer from './tweets/tweetsReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  users: usersReducer
});

export default rootReducer;
