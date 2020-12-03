import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { NaverMap } from 'react-naver-maps';
import App from './App';

jest.mock('react-redux');
jest.mock('react-naver-maps');

describe('App', () => {
  useDispatch.mockImplementation(() => jest.fn());
  useSelector.mockImplementation((selector) => selector({
    selectedOptions: {
      region: '',
      climbingLevel: '',
      season: '',
      activity: '',
    },
    courses: [],
  }));

  NaverMap.mockImplementation(() => (
    <div id="react-naver-map" />
  ));

  it('render questions and options', () => {
    const { container, getAllByLabelText } = render((
      <App />
    ));

    expect(container).toHaveTextContent('지역을 선택해 주세요.');
    expect(getAllByLabelText('서울')).not.toBeNull();
  });
});
