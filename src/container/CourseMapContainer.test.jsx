import React from 'react';

import { render } from '@testing-library/react';

import { getCourseGPXFile } from 'service/courseGPX';

import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import CourseMapContainer from './CourseMapContainer';

jest.mock('react-redux');
jest.mock('service/courseGPX');
jest.mock('react-naver-maps');

describe('CourseMapContainer', () => {
  RenderAfterNavermapsLoaded.mockImplementation(() => (<div />));
  getCourseGPXFile.mockImplementation(() => '');

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

    expect(getCourseGPXFile).toBeCalled();
  });
});
