import * as actionTypes from './tweetsActionTypes';

const initialState = {
    isFetchingTweets: false,
    tweets: [],
    count: 0,
    errorFetching: null,
    isPosting: false,
    posted: false,
    errorPosting: null,
    isUpdating: false,
    updated: false,
    errorUpdating: null
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
                tweets: action.payload.tweets,
                count: action.payload.count,
                isFetchingTweets: false
            }
        case actionTypes.FETCH_TWEETS_FAILURE:
            return {
                ...state,
                errorFetching: action.payload,
                isFetchingTweets: false
            }
        
        // post new tweet
        case actionTypes.POST_TWEET_REQUEST:
            return {
                ...state,
                isPosting: true,
                posted: false,
                errorPosting: null
            }
        case actionTypes.POST_TWEET_SUCCESS:
            return {
                ...state,
                posted: true,
                isPosting: false
            }
        case actionTypes.POST_TWEET_FAILURE:
            return {
                ...state,
                errorPosting: action.payload,
                isPosting: false
            }
        
        // update tweet claps
        case actionTypes.UPDATE_TWEET_CLAPS_REQUEST:
            return {
                ...state,
                isUpdating: true,
                updated: false,
                errorUpdating: null
            }
        case actionTypes.UPDATE_TWEET_CLAPS_SUCCESS:
            return {
                ...state,
                updated: true,
                isUpdating: false
            }
        case actionTypes.UPDATE_TWEET_CLAPS_FAILURE:
            return {
                ...state,
                errorUpdating: action.payload,
                isUpdating: false
            }
        default:
            return state;
    }
}

export default tweetsReducer;
