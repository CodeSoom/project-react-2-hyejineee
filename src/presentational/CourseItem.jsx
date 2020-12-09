import React from 'react';

export default function CourseItem({
  course: {
    id, courseName, course, mountainName, tags,
  },
  onClick,
}) {
  function handleClick() {
    onClick(id);
  }

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
      <button type="button" onClick={handleClick}>.</button>
    </div>
  );
}
