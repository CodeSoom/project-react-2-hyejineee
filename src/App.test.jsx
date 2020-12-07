import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-redux');

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

  it('render questions and options', () => {
    const { container, getByText } = render((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('당신만의 등산로를 찾아드립니다!');
    expect(getByText('Start')).not.toBeNull();
  });
});
