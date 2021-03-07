import React, { FC, useState } from 'react';

import TweetForm from '../components/Form';
import TweetsList from '../components/TweetsList';
import Pagination from '../components/Pagination';

const HomeView: FC = () => {

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  return (
    <>
      <TweetForm />
      <TweetsList {...{ page, limit }} singleUser={false} />
      <Pagination {...{ page, limit, setLimit, setPage }} />
    </>
  );
}

export default HomeView;
