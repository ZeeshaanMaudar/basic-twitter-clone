import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { updateTweetClapsStartAsync, deleteTweetStartAsync } from '../../redux/tweets/tweetsActions';
import { selectIsUpdating, selectCurrentId  } from '../../redux/tweets/tweetsSelectors';

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

const callButton = (userId: number, handleDelete: () => void) => {

  if (userId === 1) {
    return (
      <button onClick={handleDelete}>Delete</button>
    );
  }

  return null;

}

const Tweet: FC<TweetCardProps> = ({ tweetItem, user, userDetails }) => {

  const { id, tweet, date, claps, userId } = tweetItem;

  const [count, setCount] = useState(claps);
  const loading = useSelector(selectIsUpdating);
  const currentId = useSelector(selectCurrentId);

  const dispatch = useDispatch();

  useEffect(() => {

    if (count !== claps) {

      const newTweetItem = {
        ...tweetItem,
        claps: count
      };
  
      dispatch(updateTweetClapsStartAsync(id, newTweetItem));

    }

  }, [count]);

  const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
  }

  const handleDelete = () => {
    dispatch(deleteTweetStartAsync(id));
  }

  const timeFromNow = moment(date, 'YYYY-MM-DD, h:mm:ss a').fromNow();

  if (user && userDetails) {

    const { username, role, usersDetailsId, profilePic } = user;
    const { firstName } = userDetails;

    return (
      <div style={{ border: '1px solid red'}}>
        <div>
          <Link to={`/${userId}`}>
            <img src={profilePic} alt={`${username}'s profile avatar`} style={{ width: '50px', height: '50px'}} />
          </Link>
        </div>
        <div>
          <div>
            <Link to={`/${userId}`}>
              <h4>{firstName}</h4>
            </Link>
            <Link to={`/${userId}`}>
              <span>{username}</span>
            </Link>
            <span>{timeFromNow}</span>
            {callButton(userId, handleDelete)}
          </div>
          <p>{tweet}</p>
          <button onClick={incrementCount} disabled={loading && id === currentId}>Claps: {count}</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Tweet;
