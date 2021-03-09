import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';

import { fetchUserEntireTweetsStartAsync } from '../../redux/tweets/tweetsActions';
import { selectIsFetchingAllTweetsPerUser, selectlastTenDaysTweetsStats, selectErrorAllTweetsPerUser } from '../../redux/tweets/tweetsSelectors';

import {
  Wrapper,
  Title,
  Heading,
  ContentWrapper,
  NumberOfTweets
} from './styled';

interface StatsProps {
  userId: string
}

const callDescription = (numberOfDaysAgo: number) => {
  if (numberOfDaysAgo === 0) {
    return <Heading>Today:</Heading>
  } else if (numberOfDaysAgo === 1) {
    return <Heading>Yesterday:</Heading>
  } else {
    return <Heading>{numberOfDaysAgo} days ago:</Heading>
  }

}

const callTweetsString = (stats: any, numberOfDaysAgo: number) => {

  if (stats[numberOfDaysAgo] === 1) {
    return 'tweet';
  }

  return 'tweets'
}

const callTweetsStringForTotalCount = (tweetsCount: number) => {

  if (tweetsCount === 1) {
    return 'tweet';
  }

  return 'tweets'
}

const numberOfTweets = (stats: any, numberOfDaysAgo: number) => {

  if (stats) {
    return (
      <ContentWrapper key={numberOfDaysAgo}>
        {callDescription(numberOfDaysAgo)}
        <NumberOfTweets>{stats[numberOfDaysAgo] ? stats[numberOfDaysAgo] : 0} {callTweetsString(stats, numberOfDaysAgo)}</NumberOfTweets>
      </ContentWrapper>
    );
  }

}

const callListOfStats = (stats: any) => {
  const daysAgoList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return daysAgoList.map(numberOfDaysAgo => {
    return (
      numberOfTweets(stats, numberOfDaysAgo)
    );
  })
}

const callTotalForPastTendays = (stats: any) => {

  let tweetsCount = 0;

  if (stats) {

    let numberOfTweetsArray: number[] = Object.values(stats);

    numberOfTweetsArray.forEach((number) => {
      tweetsCount += number;
    });

    return (
      <ContentWrapper>
        <Heading>Total Count:</Heading>
        <NumberOfTweets>{tweetsCount} {callTweetsStringForTotalCount(tweetsCount)}</NumberOfTweets>
      </ContentWrapper>
    );
    
  }

  return null;
}

const Statistics: FC<StatsProps> = ({ userId }) => {

  const dispatch = useDispatch();

  const loading = useSelector(selectIsFetchingAllTweetsPerUser);
  const stats = useSelector(selectlastTenDaysTweetsStats);
  const error = useSelector(selectErrorAllTweetsPerUser);

  useEffect(() => {
    fetchTweetsListForUser();
  }, []);

  const fetchTweetsListForUser = () => {
    dispatch(fetchUserEntireTweetsStartAsync(Number(userId)));
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <Wrapper>
      <Title>Number of Tweets per day of the last 10 days:</Title>
      {callListOfStats(stats)}
      {callTotalForPastTendays(stats)}
    </Wrapper>
  )

}

export default Statistics;
