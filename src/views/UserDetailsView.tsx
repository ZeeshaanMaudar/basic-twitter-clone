import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsView = () => {

  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      This is the user details page
    </div>
  );
}

export default UserDetailsView;
