import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { postTweetStartAsync } from '../../redux/tweets/tweetsActions';

import {
  Wrapper,
  TextArea,
  Button
} from './styled';

const TweetForm: FC = () => {

  const [newTweet, setNewTweet] = useState('');

  const dispatch = useDispatch();

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
        <TextArea
          name='newTweet'
          value={newTweet}
          onChange={handleChange}
          placeholder="What's happening?"
          rows={3}
        />
        <Button type='submit' disabled={newTweet.length <= 0}>Tweet</Button>
      </form>
    </Wrapper>
  );
}

export default TweetForm;
