import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
