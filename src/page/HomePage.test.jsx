import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('MainPage', () => {
  const { container, getByText } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('당신만의 등산로를 찾아드립니다!');
  expect(getByText('Start')).not.toBeNull();
});
