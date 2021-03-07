import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchSingleUserStartAsync, fetchSingleUserDetailsStartAsync } from '../redux/singleUser/singleUserActions';

import Profile from '../components/Profile';

const UserDetailsView: FC = () => {

  const { userId } = useParams<{ userId: string }>();

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
      <div>Tweets Section</div>
      <div>Statistics Section</div>
    </div>
  );
}

export default UserDetailsView;
