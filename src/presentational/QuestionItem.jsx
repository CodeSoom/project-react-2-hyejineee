import React from 'react';

import RadioInput from 'presentational/RadioInput';

export default function QuestionItem({
  category, question, options, onChange,
}) {
  return (
    <div>
      <p>{question}</p>
      {options.map(({ id, option }) => (
        <RadioInput
          key={id}
          id={id}
          name={category}
          value={option}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
