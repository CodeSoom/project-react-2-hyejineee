import React from 'react';

import CoursesContainer from 'container/CoursesContainer';
import CourseMapContainer from 'container/CourseMapContainer';
import SelectedOptionContainer from 'container/SelectedOptionContainer';

export default function ResultPage() {
  return (
    <div>
      <SelectedOptionContainer />
      <CoursesContainer />
      <CourseMapContainer />
    </div>
  );
}
