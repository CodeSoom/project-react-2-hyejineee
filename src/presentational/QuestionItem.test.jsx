import React from 'react';

import { render } from '@testing-library/react';

import QuestionItem from './QuestionItem';

describe('QuestionItem', () => {
  const question = '1. 지역을 선택해 주세요.';
  const options = [
    { id: 1, option: '서울' },
    { id: 2, option: '부산' },
    { id: 3, option: '대구' },
    { id: 4, option: '인천' },
    { id: 5, option: '광주' },
  ];

  const { container, getByLabelText } = render(
    <QuestionItem
      category="region"
      question={question}
      options={options}
      onChange={jest.fn()}
    />,
  );

  it('render question and options', () => {
    expect(container).toHaveTextContent(question);

    options.forEach(({ option }) => {
      expect(getByLabelText(option)).not.toBeNull();
    });
  });
});
