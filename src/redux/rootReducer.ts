import { combineReducers } from 'redux';

import tweetsReducer from './tweets/tweetsReducer';

const rootReducer = combineReducers({
  tweets: tweetsReducer
});

export default rootReducer;
