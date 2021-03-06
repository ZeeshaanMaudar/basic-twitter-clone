import React, { FC } from 'react';

interface TweetProps {
  tweetItem: {
    id: number,
    tweet: string,
    date: string,
    claps: number,
    userId: number
  }
}

const Tweet: FC<TweetProps> = ({ tweetItem }) => {

  console.log('tweetItem: ', tweetItem);

  const { id, tweet, date, claps, userId } = tweetItem;

  return (
    <div style={{ border: '1px solid red'}}>
      <div>{date}</div>
      <div>{tweet}</div>
      <div>{claps}</div>
    </div>
  );
}

export default Tweet;
