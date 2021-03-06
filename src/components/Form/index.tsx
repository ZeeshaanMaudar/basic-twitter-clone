import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { postTweetStartAsync } from '../../redux/tweets/tweetsActions';

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
    <form onSubmit={handleSubmit}>
      <input
        name='newTweet'
        value={newTweet}
        onChange={handleChange}
        placeholder='Post a new tweet'
      />
      <button type='submit' disabled={newTweet.length <= 0}>Tweet</button>
    </form>
  );
}

export default TweetForm;
