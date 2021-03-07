import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchSingleUserStartAsync, fetchSingleUserDetailsStartAsync } from '../redux/singleUser/singleUserActions';

import Profile from '../components/Profile';
import TweetsList from '../components/TweetsList';
import Pagination from '../components/Pagination';


const UserDetailsView: FC = () => {

  const { userId } = useParams<{ userId: string }>();

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchSingleUserDetails();
  }, []);

  const fetchSingleUserDetails = () => {
    dispatch(fetchSingleUserStartAsync(Number(userId)));
    dispatch(fetchSingleUserDetailsStartAsync(Number(userId)));
  }

  return (
    <div>
      <Profile />
      <TweetsList {...{ page, limit }} singleUser={true} />
      <Pagination {...{ page, limit, setLimit, setPage }} />
      <div>Tweets Section</div>
      <div>Statistics Section</div>
    </div>
  );
}

export default UserDetailsView;
