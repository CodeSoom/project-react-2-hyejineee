import React from 'react';

import QuestionsContainer from 'container/QuestionsContainer';
import CoursesContainer from 'container/CoursesContainer';

import { NaverMap } from 'react-naver-maps';

export default function App() {
  return (
    <>
      <QuestionsContainer />
      <CoursesContainer />
      <NaverMap
        style={{ width: '100%', height: '400px' }}
      />
    </>
  );
}
