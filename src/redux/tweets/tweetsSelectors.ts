import { createSelector } from 'reselect';
import moment from 'moment';

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
    count: number,
    errorFetching: string,
    isPosting: boolean,
    posted: boolean,
    errorPosting: string,
    isUpdating: boolean,
    updated: boolean,
    currentId: number | null
    errorUpdating: string,
    isDeleting: boolean,
    deleted: boolean,
    errorDeleting: string,
    isFetchingAllTweets: boolean,
    totalTweetsList: Tweet[],
    errorAllTweetsPerUser: string
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

export const selectTweetsCount = createSelector(
  [selectTweets],
  tweets => tweets.count
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

// update tweet claps
export const selectIsUpdating = createSelector(
  [selectTweets],
  tweets => tweets.isUpdating
);

export const selectSuccessfullyUpdated = createSelector(
  [selectTweets],
  tweets => tweets.updated
);

export const selectCurrentId = createSelector(
  [selectTweets],
  tweets => tweets.currentId
);

export const selectErrorUpdating = createSelector(
  [selectTweets],
  tweets => tweets.errorUpdating
);

// delete own tweet
export const selectIsDeleting = createSelector(
  [selectTweets],
  tweets => tweets.isDeleting
);

export const selectSuccessfullyDeleted = createSelector(
  [selectTweets],
  tweets => tweets.deleted
);

export const selectErrorDeleting = createSelector(
  [selectTweets],
  tweets => tweets.errorDeleting
);

// fetch all Tweets per user
export const selectIsFetchingAllTweetsPerUser = createSelector(
  [selectTweets],
  tweets => tweets.isFetchingAllTweets
);

export const selectlastTenDaysTweetsStats = createSelector(
  [selectTweets],
  tweets => {

    const currentDate = moment(new Date());

    let dateArray: any = [];

    for (let day = 0; day <= 10; day++) {
      const daysAgo = moment(currentDate).subtract(day, 'days').format('YYYY-MM-DD');
      const daysCount = tweets.totalTweetsList.filter(tweet => moment(tweet.date).isSameOrAfter(daysAgo));
      dateArray = [...daysCount];

    }

    let filteredObject = dateArray.reduce((accumulator: any, currentTweet: Tweet) => {

      const transformedTweet = {
        ...currentTweet,
        datediffFromNow: moment(currentDate).diff(moment(currentTweet.date), 'days')
      }

      if (!accumulator[transformedTweet.datediffFromNow]) {
        accumulator[transformedTweet.datediffFromNow] = 0;
      }

      accumulator[transformedTweet.datediffFromNow]++;

      return accumulator;
    }, {});

    return filteredObject;
  }
);

export const selectErrorAllTweetsPerUser = createSelector(
  [selectTweets],
  tweets => tweets.errorAllTweetsPerUser
);
