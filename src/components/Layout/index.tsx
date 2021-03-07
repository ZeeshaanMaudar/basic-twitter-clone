import React, { FC, ReactNode } from 'react';

import {
  Wrapper
} from './styled';

const Layout: FC<ReactNode> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Layout;
