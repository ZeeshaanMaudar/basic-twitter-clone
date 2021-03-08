import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import UserDetailsView from './views/UserDetailsView';

import GlobalStyle from './common/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/:userId' component={UserDetailsView} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
