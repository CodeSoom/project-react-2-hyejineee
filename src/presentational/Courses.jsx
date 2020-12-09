import React from 'react';

import styled from '@emotion/styled';

import CourseItem from 'presentational/CourseItem';

const Container = styled.div({
  width: '50%',
  flex: '1 0 50%',
});

export default function Courses({ courses, onClick }) {
  if (courses.length <= 0) {
    return (
      <Container>
        <img alt="등산코스 없음" src="../test.jpg" />
      </Container>
    );
  }

  return (
    <Container>
      {
        courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onClick={onClick}
          />
        ))
      }
    </Container>
  );
}
