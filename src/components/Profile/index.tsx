import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsFetchingUser, selectUser, selectErrorFetchingUser } from '../../redux/singleUser/singleUserSelectors';


const Profile = () => {

  const loading = useSelector(selectIsFetchingUser);
  const user = useSelector(selectUser);
  const error = useSelector(selectErrorFetchingUser);

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const { id, username, role, usersDetailsId, profilePic } = user;

  return (
    <div>
      <img src={profilePic} alt={`${username}'s profile avatar`} style={{ width: '100px', height: '100px'}} />
      <div>Details Here</div>
    </div>
  );
}

export default Profile;
