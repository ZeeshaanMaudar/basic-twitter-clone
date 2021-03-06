import React, { FC } from 'react';

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
  }
}

const Tweet: FC<TweetCardProps> = ({ tweetItem, user }) => {

  const { tweet, date, claps, userId } = tweetItem;
  const { username, role, usersDetailsId, profilePic } = user;

  return (
    <div style={{ border: '1px solid red'}}>
      <div>
        <img src={profilePic} alt={`${username}'s profile avatar`} style={{ width: '50px', height: '50px'}} />
      </div>
      <div>
        <div>
          <span>{username}</span>
          <span>{date}</span>
        </div>
        <p>{tweet}</p>
        <div>Claps: {claps}</div>
      </div>
    </div>
  );
}

export default Tweet;
