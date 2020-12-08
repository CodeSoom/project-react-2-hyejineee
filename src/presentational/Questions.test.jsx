import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import questions from '../../features/questions';

import Questions from './Questions';

describe('Questions', () => {
  const handleChange = jest.fn();

  function renderQuestions() {
    return render(
      <MemoryRouter>
        <Questions questions={questions} onChange={handleChange} />
      </MemoryRouter>,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render questions', () => {
    const { container } = renderQuestions();

    questions.forEach((question) => {
      expect(container).toHaveTextContent(question.question);
    });
  });
});
