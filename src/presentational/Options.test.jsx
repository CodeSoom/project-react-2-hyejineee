import React from 'react';

import { render } from '@testing-library/react';

import Options from './Options';

describe('QuestionItem', () => {
  const options = [
    { id: 1, option: '봄' },
    { id: 2, option: '여름' },
    { id: 3, option: '가을' },
    { id: 4, option: '겨울' },
  ];

  const { getByLabelText } = render(
    <Options
      category="seson"
      options={options}
      onChange={jest.fn()}
    />,
  );

  it('render options', () => {
    options.forEach(({ option }) => {
      expect(getByLabelText(option)).not.toBeNull();
    });
  });
});
