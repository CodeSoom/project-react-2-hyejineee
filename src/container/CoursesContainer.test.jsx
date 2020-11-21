import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CoursesContainer from './CoursesContainer';

jest.mock('react-redux');

describe('CoursesContainer', () => {
  function renderCoursesContainer() {
    return render(
      <CoursesContainer />,
    );
  }

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedOptions: given.selectedOptions || {
        region: '서울',
        climbingLevel: '초보자',
        season: '가을',
        activity: '경치 구경하기',
      },
      courses: [
        {
          mountainName: '소요산',
          courseName: '공주봉 코스',
        },
      ],
    }));
  });

  it('render course according to selected option', () => {
    const { container } = renderCoursesContainer();

    expect(container).toHaveTextContent('소요산');
    expect(container).toHaveTextContent('공주봉 코스');
  });

  it('calls setCourses action', () => {
    renderCoursesContainer();
    expect(dispatch).toBeCalled();
  });
});
