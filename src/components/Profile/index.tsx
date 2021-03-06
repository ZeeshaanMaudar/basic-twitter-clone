import React from 'react';
import { useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import moment from 'moment';

import {
  selectIsFetchingUser,
  selectUser,
  selectErrorFetchingUser,
  selectIsFetchingSingleUserDetails,
  selectUserDetails,
  selectErrorFetchingUserDetails
} from '../../redux/singleUser/singleUserSelectors';

import TweetForm from '../TweetForm';

import { User, UserDetails } from '../../common/interface';

import {
  StyledLink,
  ProfileWrapper,
  ProfilePic,
  FullName,
  Username,
  BirthDate
} from './styled';

const callProfile = (user: User, userDetails: UserDetails) => {

  if (user && userDetails) {

    const { id, username, profilePic } = user;
    const { firstName, lastName, birthday } = userDetails;

    return (
      <div>
        <StyledLink to='/'>Go Back</StyledLink>
        <ProfileWrapper>
          <div>
            <ProfilePic src={profilePic} alt={`${username}'s profile avatar`} />
          </div>
          <div>
            <FullName>{firstName} {lastName}</FullName>
            <Username>{username}</Username>
            <BirthDate>Born {moment(birthday).format("Do MMM YYYY")}</BirthDate>
          </div>
        </ProfileWrapper>
        {id === 1 && <TweetForm />}
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

  if (errorUser) {
    return <h1>{errorUser}</h1>;
  }

  if (errorUserDetails) {
    return <h1>{errorUserDetails}</h1>;
  }

  if (loadingUser || loadingUserDetails) {
    return <SpinnerCircular />;
  }

  return (
    callProfile(user, userDetails)
  );
}

export default Profile;
