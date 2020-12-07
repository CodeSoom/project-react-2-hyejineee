import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'page/HomePage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
