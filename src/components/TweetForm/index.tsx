import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { postTweetStartAsync } from '../../redux/tweets/tweetsActions';

import { fetchSingleUserStartAsync } from '../../redux/singleUser/singleUserActions';
import { selectUser, selectIsFetchingUser, selectErrorFetchingUser } from '../../redux/singleUser/singleUserSelectors';

import {
  Wrapper,
  Title,
  TextArea,
  Button,
  ProfilePic,
  FormHeader,
  FormFooter
} from './styled';

interface User {
  id: number,
  username: string,
  role: string,
  usersDetailsId: number,
  profilePic: string
}

const callImage = (user: User, isLoadingUser: boolean) => {

  if (isLoadingUser) {
    return <div>Loading...</div>
  }

  if (user) {

    return (
      <Link to='/1'>
        <ProfilePic src={user.profilePic} alt='profile avatar' />
      </Link>
    );
  }

}

const TweetForm: FC = () => {

  const [newTweet, setNewTweet] = useState('');

  const dispatch = useDispatch();


  const isLoadingUser = useSelector(selectIsFetchingUser);
  const errorLoadingUser = useSelector(selectErrorFetchingUser);
  const user = useSelector(selectUser);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    dispatch(fetchSingleUserStartAsync(1));
  }

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNewTweet(event.target.value);
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (newTweet.length > 0) {
      setNewTweet('');
      dispatch(postTweetStartAsync(newTweet))
    }
  }

  if (errorLoadingUser) {
    return <h1>{errorLoadingUser}</h1>;
  }

  return (
    <Wrapper>
      <Title>Post Tweet</Title>
      <form onSubmit={handleSubmit}>
        <FormHeader>
          {callImage(user, isLoadingUser)}
          <TextArea
            name='newTweet'
            value={newTweet}
            onChange={handleChange}
            placeholder="What's happening?"
            rows={3}
          />
        </FormHeader>  
        <FormFooter>
          <Button type='submit' disabled={newTweet.length <= 0}>Tweet</Button>
        </FormFooter>
      </form>
    </Wrapper>
  );
}

export default TweetForm;
