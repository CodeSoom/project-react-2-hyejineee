import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import climbingCourses from 'data/courses';

import { setCourses } from '_redux/slice';

function findCourse({
  region, climbingLevel, season, activity,
}) {
  if (!(region && climbingLevel && season && activity)) {
    return [];
  }
  const difficulty = {
    '초보자': '하',
    '중급자': '중',
    '상급자': '상',
  }[climbingLevel];

  return climbingCourses.filter((course) => {
    if (course.region === region
        && course.difficulty === difficulty
        && course.season.filter((item) => item.option === season).length !== 0
        && course.activity.filter((item) => item.option === activity).length !== 0
    ) {
      return true;
    }
    return false;
  });
}

export default function CoursesContainer() {
  const dispatch = useDispatch();

  const { selectedOptions, courses } = useSelector((state) => ({
    selectedOptions: state.selectedOptions,
    courses: state.courses,
  }));

  useEffect(() => {
    dispatch(setCourses(findCourse(selectedOptions)));
  }, [selectedOptions]);

  return (
    <div>
      {
        courses.map(({
          id, courseName, course, mountainName, homepageUrl, tags,
        }) => (
          <div key={id}>
            <p>
              {`${mountainName} - ${courseName}`}
            </p>
            <p>{course}</p>
            <p>{homepageUrl}</p>
            {
              tags.map((tag) => (
                <p>{tag}</p>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}
