import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { updateTweetClapsStartAsync } from '../../redux/tweets/tweetsActions';

interface TweetProps {
  id: number,
  tweet: string,
  date: string,
  claps: number,
  userId: number
}
interface TweetCardProps {
  tweetItem: {
    id: number,
    tweet: string,
    date: string,
    claps: number,
    userId: number
  },
  user: {
    id: number,
    username: string,
    role: string,
    usersDetailsId: number,
    profilePic: string
  },
  userDetails: {
    id: number,
    firstName: string,
    lastName: string,
    birthday: string
  }
}

const Tweet: FC<TweetCardProps> = ({ tweetItem, user, userDetails }) => {

  const { id, tweet, date, claps, userId } = tweetItem;
  const { username, role, usersDetailsId, profilePic } = user;
  const { firstName } = userDetails;

  const dispatch = useDispatch();

  const incrementCount = (id: number, tweetItem: TweetProps) => {

    const newTweetItem = {
      ...tweetItem,
      claps: claps + 1
    };

    dispatch(updateTweetClapsStartAsync(id, newTweetItem));
  }

  return (
    <div style={{ border: '1px solid red'}}>
      <div>
        <img src={profilePic} alt={`${username}'s profile avatar`} style={{ width: '50px', height: '50px'}} />
      </div>
      <div>
        <div>
          <h4>{firstName}</h4>
          <span>{username}</span>
          <span>{date}</span>
        </div>
        <p>{tweet}</p>
        <button onClick={() => incrementCount(id, tweetItem)}>Claps: {claps}</button>
      </div>
    </div>
  );
}

export default Tweet;
