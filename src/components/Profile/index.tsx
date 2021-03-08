import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectIsFetchingUser,
  selectUser,
  selectErrorFetchingUser,
  selectIsFetchingSingleUserDetails,
  selectUserDetails,
  selectErrorFetchingUserDetails
} from '../../redux/singleUser/singleUserSelectors';

import TweetForm from '../TweetForm';

interface UserDetails {
  id: number,
  firstName: string,
  lastName: string,
  birthday: string
}

interface User {
  id: number,
  username: string,
  role: string,
  usersDetailsId: number,
  profilePic: string
}

const callProfile = (user: User, userDetails: UserDetails) => {

  if (user && userDetails) {

    const { id, username, role, usersDetailsId, profilePic } = user;
    const { firstName, lastName, birthday } = userDetails;

    return (
      <div>
        {id === 1 && <TweetForm />}
        <img src={profilePic} alt={`${username}'s profile avatar`} style={{ width: '100px', height: '100px'}} />
        <div>
          <div>
            <h4>{firstName} {lastName}</h4>
            <h6>{username}</h6>
          </div>
          <div>
            <p>Born {birthday}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;

}

const Profile = () => {

  const loadingUser = useSelector(selectIsFetchingUser);
  const user = useSelector(selectUser);
  const errorUser = useSelector(selectErrorFetchingUser);

  const loadingUserDetails = useSelector(selectIsFetchingSingleUserDetails);
  const userDetails = useSelector(selectUserDetails);
  const errorUserDetails = useSelector(selectErrorFetchingUserDetails);

  if (errorUser || errorUserDetails) {
    return <h1>Something went wrong!</h1>;
  }

  if (loadingUser || loadingUserDetails) {
    return <div>Loading...</div>;
  }

  return (
    callProfile(user, userDetails)
  );
}

export default Profile;
