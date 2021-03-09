import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import { updateTweetClapsStartAsync, deleteTweetStartAsync } from '../../redux/tweets/tweetsActions';
import { selectIsUpdating, selectCurrentId, selectErrorUpdating  } from '../../redux/tweets/tweetsSelectors';

import VerifiedIcon from '../svg/verified.svg';

import { TweetType, User, UserDetails } from '../../common/interface';

import {
  Wrapper,
  ProfilePic,
  TweetContent,
  FirstName,
  StyledLink,
  UserName,
  TweetHeader,
  StyledDate,
  HeaderLeft,
  HeaderRight,
  StyledTweet,
  NameWrapper,
  VerifiedImage,
  TweetFooter,
  ClapButton,
  DeleteButton
} from './styled';
interface TweetCardProps {
  tweetItem: TweetType,
  user: User | null,
  userDetails: UserDetails | null
}

const callButton = (userId: number, handleDelete: () => void) => {

  if (userId === 1) {
    return (
      <DeleteButton onClick={handleDelete} />
    );
  }

  return null;

}

const Tweet: FC<TweetCardProps> = ({ tweetItem, user, userDetails }) => {

  const { id, tweet, date, claps, userId } = tweetItem;

  const [count, setCount] = useState(claps);
  const loading = useSelector(selectIsUpdating);
  const errorUpdating = useSelector(selectErrorUpdating);
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

  if (errorUpdating) {
    return <h1>{errorUpdating}</h1>;
  }

  const timeFromNow = moment(date, 'YYYY-MM-DD, h:mm:ss a').fromNow();

  if (user && userDetails) {

    const { username, profilePic } = user;
    const { firstName } = userDetails;

    return (
      <Wrapper>
        <div>
          <StyledLink to={`/${userId}`}>
            <ProfilePic src={profilePic} alt={`${username}'s profile avatar`} />
          </StyledLink>
        </div>
        <TweetContent>
          <TweetHeader>
            <HeaderLeft>
              <div>
                <NameWrapper>
                  <StyledLink to={`/${userId}`}>
                    <FirstName>{firstName}</FirstName>
                  </StyledLink>
                  <VerifiedImage src={ VerifiedIcon} alt='verified' />
                </NameWrapper>
              </div>
              <div>
                <StyledLink to={`/${userId}`}>
                  <UserName>{username}</UserName>
                </StyledLink>
              </div>
              <div>
                <StyledDate> {timeFromNow}</StyledDate>
              </div>
            </HeaderLeft>
            
            <HeaderRight>
              {callButton(userId, handleDelete)}
            </HeaderRight>
          </TweetHeader>
          <StyledTweet>{tweet}</StyledTweet>
          <TweetFooter>
            <ClapButton
              onClick={incrementCount}
              disabled={(loading && id === currentId) || userId === 1}
            />
            <span>Claps: {count}</span>
          </TweetFooter>
        </TweetContent>
      </Wrapper>
    );
  } else {
    return null;
  }
}

Tweet.propTypes = {
  tweetItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tweet: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    claps: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    usersDetailsId: PropTypes.number.isRequired,
    profilePic: PropTypes.string.isRequired,
  }),
  userDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
  }),
}

export default Tweet;
