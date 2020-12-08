import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'page/HomePage';
import QuestionPage from './page/QuestionsPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/questions" component={QuestionPage} />
      </Switch>
    </div>
  );
}
