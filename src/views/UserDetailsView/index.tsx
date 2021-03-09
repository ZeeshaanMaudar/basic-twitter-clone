import React, { FC, useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';

import { fetchSingleUserStartAsync, fetchSingleUserDetailsStartAsync } from '../../redux/singleUser/singleUserActions';

import Profile from '../../components/Profile';
import TweetsList from '../../components/TweetsList';
import Pagination from '../../components/Pagination';
import Layout from '../../components/Layout';

import { ButtonsWrapper, Button } from './styled';

const Statistics = lazy(() => import('../../components/Statistics'));

const callTabs = (tab: boolean, page: number, limit: number, setLimit: (event: any) => void, setPage: (event: any) => void, userId: string ) => {

  if (tab) {
    return (
      <Suspense fallback={<SpinnerCircular />}>
        <Statistics {...{ userId }} />
      </Suspense>
    );
  }

  return (
    <div>
      <TweetsList {...{ page, limit }} profileView={true} />
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
      <ButtonsWrapper>
        <Button
          onClick={changeToTweets}
          disabled={!tab}
        >
          All Tweets
        </Button>
        <Button
          onClick={changeToStatistics}
          disabled={tab}
        >
          Statistics
        </Button>
      </ButtonsWrapper>
      {callTabs(tab, page, limit, setLimit, setPage, userId)}
    </Layout>
  );
}

export default UserDetailsView;
