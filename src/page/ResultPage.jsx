import React from 'react';

import CoursesContainer from 'container/CoursesContainer';
import CourseMapContainer from 'container/CourseMapContainer';
import SelectedOptionContainer from 'container/SelectedOptionContainer';

import Layout from 'presentational/Layout';

export default function ResultPage() {
  return (
    <Layout>
      <SelectedOptionContainer />
      <CoursesContainer />
      <CourseMapContainer />
    </Layout>
  );
}
