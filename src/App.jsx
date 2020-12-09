import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'page/HomePage';
import QuestionPage from 'page/QuestionsPage';
import ResultPage from 'page/ResultPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/project-react-2-hyejineee" component={HomePage} />
        <Route path="/project-react-2-hyejineee/questions" component={QuestionPage} />
        <Route path="/project-react-2-hyejineee/result" component={ResultPage} />
      </Switch>
    </div>
  );
}
