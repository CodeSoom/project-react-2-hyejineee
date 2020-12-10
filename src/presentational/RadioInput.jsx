import React from 'react';

import styled from '@emotion/styled';

import OptionTitle from 'style/OptionTitle';

import * as optionImage from 'asset/image';

const Container = styled.div({
  'boxSizing': 'border-box',
  'padding': '1rem',
  'height': '23rem',
  'width': '17.3rem',
  'flex': '0 1 17.3rem',
  'overflow': 'hidden',
  '& input': {
    opacity: '0',
    width: '0',
    height: '0',
  },
  '& input + img': {
    cursor: 'pointer',
    margin: '0 auto',
  },
  '& input:checked + img': {
    outline: '2px solid #f00',
  },
  'textAlign': 'center',
  '& p': {
    marginTop: '2rem',
  },

  ' :hover': {
    borderRadius: '20px',
    boxShadow: '0 3px 37px -10px rgba(207, 207, 207, 0.51)',
    transform: 'scale(1.3)',
  },
});

export default function RadioInput({
  id, name, value, onChange,
}) {
  const imageUrl = optionImage[`${name}`][`${name}${id}`].default;

  function handleChange(event) {
    const { target } = event;
    onChange({ name: target.name, value: target.value });
  }

  return (
    <Container>
      <label htmlFor={`${name}-${id}`}>
        <input
          type="radio"
          name={name}
          id={`${name}-${id}`}
          value={value}
          onChange={handleChange}
        />
        <img src={imageUrl} alt="" />
        <OptionTitle>{value}</OptionTitle>
      </label>
    </Container>
  );
}
