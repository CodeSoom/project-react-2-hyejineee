import React from 'react';

import { render } from '@testing-library/react';

import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import { useDispatch, useSelector } from 'react-redux';

import CourseMapContainer from './CourseMapContainer';

jest.mock('react-redux');
jest.mock('service/courseGPX');
jest.mock('react-naver-maps');

describe('CourseMapContainer', () => {
  const disptch = jest.fn();
  useDispatch.mockImplementation(() => disptch);
  useSelector.mockImplementation((selector) => selector({
    courseGPX: '',
  }));

  RenderAfterNavermapsLoaded.mockImplementation(() => (<div />));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCourseMapContainer() {
    return render(
      <CourseMapContainer
        courseId={1}
      />,
    );
  }

  it('calls getGPXfile ', () => {
    renderCourseMapContainer();

    expect(disptch).toBeCalled();
  });
});
