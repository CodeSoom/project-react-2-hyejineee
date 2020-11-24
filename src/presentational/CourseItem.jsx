import React from 'react';

export default function CourseItem({
  course: {
    courseName, course, mountainName, homepageUrl, tags,
  },
}) {
  return (
    <>
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
    </>
  );
}
