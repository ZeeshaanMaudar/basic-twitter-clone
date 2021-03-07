import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postTweetStartAsync } from '../../redux/tweets/tweetsActions';
import { selectUsersList, selectIsFetchingUsers } from '../../redux/users/usersSelectors';

import {
  Wrapper,
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

const callImage = (usersList: User[], isLoadingList: boolean) => {

  if (isLoadingList) {
    return <div>Loading...</div>
  }

  if (usersList.length > 0) {
    const userInfoList = usersList.filter(user => user.id === 1);
    const image = userInfoList[0].profilePic;

    return (
      <ProfilePic src={image} alt='profile avatar' />
    );
  }

}

const TweetForm: FC = () => {

  const [newTweet, setNewTweet] = useState('');

  const dispatch = useDispatch();


  const isLoadingList = useSelector(selectIsFetchingUsers);
  const usersList = useSelector(selectUsersList);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNewTweet(event.target.value);
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (newTweet.length > 0) {
      dispatch(postTweetStartAsync(newTweet))
    }
  }


  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormHeader>
          {callImage(usersList, isLoadingList)}
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
