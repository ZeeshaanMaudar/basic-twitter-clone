import * as actionTypes from './tweetsActionTypes';

const initialState = {
    isFetchingTweets: false,
    tweets: [],
    error: null
};

const tweetsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionTypes.FETCH_TWEETS_REQUEST:
            return {
                ...state,
                isFetchingTweets: true
            }
        case actionTypes.FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: action.payload,
                isFetchingTweets: false
            }
        case actionTypes.FETCH_TWEETS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetchingTweets: false
            }
        default:
            return state;
    }
}

export default tweetsReducer;
