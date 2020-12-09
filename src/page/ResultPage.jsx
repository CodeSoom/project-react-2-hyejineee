import React from 'react';

import CoursesContainer from 'container/CoursesContainer';
import CourseMapContainer from 'container/CourseMapContainer';
import SelectedOptionContainer from 'container/SelectedOptionContainer';

import Layout from 'presentational/Layout';

import styled from '@emotion/styled';

const OptionBox = styled.div({
  height: '30%',
  boxSizing: 'border-box',
});

const CourseBox = styled.div({
  display: 'flex',
  height: '70%',
  boxSizing: 'border-box',
});

export default function ResultPage() {
  return (
    <Layout>
      <OptionBox>
        <SelectedOptionContainer />
      </OptionBox>

      <CourseBox>
        <CoursesContainer />
        <CourseMapContainer />
      </CourseBox>
    </Layout>
  );
}
