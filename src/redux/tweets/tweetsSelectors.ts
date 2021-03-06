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
    error: string | null
  }
}

const selectTweets = (state: State) => state.tweets;

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
  tweets => tweets.error
);
