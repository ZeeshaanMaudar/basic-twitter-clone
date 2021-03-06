import React, { FC } from 'react';

import TweetForm from '../components/Form';
import TweetsList from '../components/TweetsList';

const HomeView: FC = () => {

  return (
    <>
      <TweetForm />
      <TweetsList />
    </>
  );
}

export default HomeView;
