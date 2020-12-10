import React from 'react';

import styled from '@emotion/styled';

import RadioInput from 'presentational/RadioInput';

const Container = styled.div({
  display: 'flex',
  alignItems: 'stretch',
  margin: '0 auto',
  justifyContent: 'space-around',
  marginTop: '9.25rem',
});

export default function Options({ options, category, onChange }) {
  return (
    <Container>
      {options.map(({ id, option }) => (
        <RadioInput
          key={id}
          id={id}
          name={category}
          value={option}
          onChange={onChange}
        />
      ))}
    </Container>
  );
}
