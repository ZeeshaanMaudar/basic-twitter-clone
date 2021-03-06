import { createSelector } from 'reselect';

interface Tweet {
  id: number,
  tweet: string,
  date: string,
  claps: number,
  userId: number
}

interface State {
  tweets: {
    isFetchingTweets: boolean,
    tweets: Tweet[],
    errorFetching: string | null,
    isPosting: boolean,
    posted: boolean,
    errorPosting: string | null
  }
}

const selectTweets = (state: State) => state.tweets;

// fetch tweets list
export const selectIsFetchingTweets = createSelector(
  [selectTweets],
  tweets => tweets.isFetchingTweets
);

export const selectTweetsList = createSelector(
  [selectTweets],
  tweets => tweets.tweets
);

export const selectErrorFetchingTweets = createSelector(
  [selectTweets],
  tweets => tweets.errorFetching
);

// post new tweet
export const selectIsPosting = createSelector(
  [selectTweets],
  tweets => tweets.isPosting
);

export const selectSuccessfullyPosted = createSelector(
  [selectTweets],
  tweets => tweets.posted
);

export const selectErrorPosting = createSelector(
  [selectTweets],
  tweets => tweets.errorPosting
);
