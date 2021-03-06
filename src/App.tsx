import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeView} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
