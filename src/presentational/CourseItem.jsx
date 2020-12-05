import React from 'react';

export default function CourseItem({
  children,
  course: {
    id, courseName, course, mountainName, tags,
  },
}) {
  return (
    <div key={id}>
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
