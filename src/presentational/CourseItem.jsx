import React from 'react';

export default function CourseItem({
  children,
  course: {
    courseName, course, mountainName, tags,
  },
}) {
  return (
    <div>
      <p>
        {`${mountainName} - ${courseName}`}
      </p>
      <p>{course}</p>
      {
        tags.map((tag) => (
          <p>{tag}</p>
        ))
      }

      {children}
    </div>
  );
}
