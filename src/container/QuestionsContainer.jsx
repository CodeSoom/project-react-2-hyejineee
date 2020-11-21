import React from 'react';

import questions from 'data/questions';

import { useDispatch } from 'react-redux';

import QuestionItem from 'presentational/QuestionItem';

import { selectOption } from '_redux/slice';

export default function QuestionsContainer() {
  const dispatch = useDispatch();

  function handleChange({ name, value }) {
    dispatch(selectOption({ name, value }));
  }

  return (
    <>
      {
        questions.map(({
          id, category, question, options,
        }) => (
          <QuestionItem
            key={id}
            category={category}
            question={question}
            options={options}
            onChange={handleChange}
          />
        ))
      }
    </>
  );
}
