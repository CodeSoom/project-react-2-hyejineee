import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('render questions and options', () => {
    const { container, getAllByLabelText } = render((
      <App />
    ));

    expect(container).toHaveTextContent('1. 지역을 선택해 주세요.');
    expect(getAllByLabelText('서울')).not.toBeNull();
  });
});
