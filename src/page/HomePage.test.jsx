import React from 'react';

import { render } from '@testing-library/react';

test('MainPage', () => {
  const { container, getByText } = render(
    <HomePage />,
  );

  expect(container).toHaveTextContent('title');
  expect(getByText('START')).not.toBeNull();
});
