import React from 'react';

import styled from '@emotion/styled';

import RadioInput from 'presentational/RadioInput';

const Box = styled.div({
  flex: '1 0 100%',
  height: '100vh',
  scrollSnapAlign: 'start',
});

export default function QuestionItem({
  category, question, options, onChange,
}) {
  return (
    <Box>
      <div id={category}>
        <h2>{question}</h2>
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
    </Box>
  );
}
