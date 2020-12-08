import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCourses } from '_redux/slice';

import { findClimbingCourses } from 'service/courses';

import CourseItem from 'presentational/CourseItem';

export default function CoursesContainer() {
  const dispatch = useDispatch();

  const { selectedOptions, courses } = useSelector((state) => ({
    selectedOptions: state.selectedOptions,
    courses: state.courses,
  }));

  useEffect(() => {
    dispatch(setCourses(findClimbingCourses(selectedOptions)));
  }, [selectedOptions]);

  if (courses.length <= 0) {
    return (<p>등산 코스가 없어여ㅕㅕ</p>);
  }

  return (
    <div>
      {
        courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))
      }
    </div>
  );
}
