import React from 'react';

import { render } from '@testing-library/react';

import SelectedOptions from './SelectedOptions';

describe('SelectedOptions', () => {
  const selectedOptions = {
    region: '서울',
    climbingLevel: '초보자',
    season: '가을',
    activity: '경치 구경하기',
  };

  function renderSelectedOptions() {
    return render(
      <SelectedOptions
        selectedOptions={selectedOptions}
      />,
    );
  }

  it('render options that selected by user', () => {
    const { container } = renderSelectedOptions();

    Object.values(selectedOptions).forEach((option) => {
      expect(container).toHaveTextContent(option);
    });
  });
});
