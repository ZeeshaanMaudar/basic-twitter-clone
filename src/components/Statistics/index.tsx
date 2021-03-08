import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserEntireTweetsStartAsync } from '../../redux/tweets/tweetsActions';
import { selectIsFetchingAllTweetsPerUser, selectlastTenDaysTweetsStats, selectErrorAllTweetsPerUser } from '../../redux/tweets/tweetsSelectors';

interface StatsProps {
  userId: string
}

const callDescription = (numberOfDaysAgo: number) => {
  if (numberOfDaysAgo === 0) {
    return <span>Today:</span>
  } else if (numberOfDaysAgo === 1) {
    return <span>Yesterday:</span>
  } else {
    return <span>{numberOfDaysAgo} days ago:</span>
  }

}

const numberOfTweets = (stats: any, numberOfDaysAgo: number) => {

  if (stats) {
    return (
      <div key={numberOfDaysAgo}>
        {callDescription(numberOfDaysAgo)}
        <span>{stats[numberOfDaysAgo] ? stats[numberOfDaysAgo] : 0}</span>
      </div>
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
      <div>
        <span>Total Count:</span>
        <span>{tweetsCount}</span>
      </div>
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

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <h1>Something went wrong!</h1>
  }

  return (
    <div>
      {callListOfStats(stats)}
      {callTotalForPastTendays(stats)}
    </div>
  )

}

export default Statistics;
