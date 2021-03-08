import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchSingleUserStartAsync, fetchSingleUserDetailsStartAsync } from '../redux/singleUser/singleUserActions';

import Profile from '../components/Profile';
import TweetsList from '../components/TweetsList';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';
import Statistics from '../components/Statistics';


const callTabs = (tab: boolean, page: number, limit: number, setLimit: (event: any) => void, setPage: (event: any) => void, userId: string ) => {

  if (tab) {
    return <Statistics {...{ userId }} />;
  }

  return (
    <div>
      <TweetsList {...{ page, limit }} singleUser={true} />
      <Pagination {...{ page, limit, setLimit, setPage }} />
    </div>
  );
}

const UserDetailsView: FC = () => {

  const { userId } = useParams<{ userId: string }>();

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const [tab, setTab] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchSingleUserDetails();
  }, []);

  const fetchSingleUserDetails = () => {
    dispatch(fetchSingleUserStartAsync(Number(userId)));
    dispatch(fetchSingleUserDetailsStartAsync(Number(userId)));
  }

  const changeToTweets = () => {
    setTab(false);
  }

  const changeToStatistics = () => {
    setTab(true);
  }

  return (
    <Layout>
      <Profile />
      <div>
        <button
          onClick={changeToTweets}
          disabled={!tab}
        >
          All Tweets
        </button>
        <button
          onClick={changeToStatistics}
          disabled={tab}
        >
          Statistics
        </button>
      </div>
      {callTabs(tab, page, limit, setLimit, setPage, userId)}
    </Layout>
  );
}

export default UserDetailsView;
