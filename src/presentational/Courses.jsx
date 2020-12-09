import React from 'react';

import CourseItem from 'presentational/CourseItem';

export default function Courses({ courses, onClick }) {
  if (courses.length <= 0) {
    return (<img alt="등산코스 없음" src="../test.jpg" />);
  }

  return (
    <div>
      {
        courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onClick={onClick}
          />
        ))
      }
    </div>
  );
}
