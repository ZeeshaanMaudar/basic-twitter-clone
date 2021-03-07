import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import UserDetailsView from './views/UserDetailsView';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeView} />
      <Route exact path='/:userId' component={UserDetailsView} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
