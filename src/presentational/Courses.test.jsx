import React from 'react';

import { render } from '@testing-library/react';

import Courses from './Courses';

import courses from '../../features/courses';

describe('Courses', () => {
  const handleClick = jest.fn();

  function renderCourses(data) {
    return render(
      <Courses courses={data} onClick={handleClick} />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render courses', () => {
    const { container } = renderCourses(courses);
    expect(container).toHaveTextContent('소요산');
  });

  context('without courses', () => {
    const { getByAltText } = renderCourses([]);
    expect(getByAltText('등산코스 없음')).toBeInTheDocument();
  });
});
