import React from 'react';

import styled from '@emotion/styled';

import rightIcon from 'asset/image/right.svg';
import leftIcon from 'asset/image/left.svg';
import { Link } from 'react-router-dom';

const Container = styled.div({
  'display': 'flex',
  'height': '10%',
  '& label': {
    display: 'hidden',
  },
  '> div': {
    margin: 'auto',
  },
});

export default function QuestionSlider({ onChange, questionIndex }) {
  function handleChange(e) {
    const { value } = e.target;
    onChange(value);
  }

  return (
    <Container>
      <div>

        <label htmlFor={`category${questionIndex - 1}`}>
          <img src={leftIcon} alt="left" />
        </label>

      </div>

      <div>
        <input type="radio" name="category" id="category1" value={0} onChange={handleChange} checked={questionIndex === 1} />
        <input type="radio" name="category" id="category2" value={1} onChange={handleChange} checked={questionIndex === 2} />
        <input type="radio" name="category" id="category3" value={2} onChange={handleChange} checked={questionIndex === 3} />
        <input type="radio" name="category" id="category4" value={3} onChange={handleChange} checked={questionIndex === 4} />

        <Link to="/result"> 결과보기</Link>
      </div>

      <div>

        <label htmlFor={`category${questionIndex + 1}`}>
          <img src={rightIcon} alt="right" />
        </label>

      </div>

    </Container>
  );
}
