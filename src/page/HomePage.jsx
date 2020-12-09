import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Title from 'style/MainTitle';
import Context from 'style/Context';

import backgroud from 'asset/image/background.svg';

const Container = styled.div(() => ({
  'height': '100vh',
  'boxSizing': 'border-box',
  'backgroundImage': `url(${backgroud})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': 'auto 90%',
  'backgroundPosition': 'right bottom',

}));

const ContentsBox = styled.div(({ theme }) => ({
  'position': 'absolute',
  'marginTop': '12rem',
  'marginLeft': '10rem',

  '& p': {
    marginTop: '1rem',
    marginBottom: '18.6rem',
  },

  '& a': {
    font: theme.typos.main,
    color: theme.colors.main,
  },
}));

export default function HomePage() {
  return (
    <Container>

      <ContentsBox>
        <Title>당신만의 등산로를 찾아드립니다!</Title>
        <Context>
          나에게 맞는 등산로는 어디에 있을까요?
          {' '}
          <br />
          나의 등산 실력, 등산의 목적, 그리고 등산을 원하는 계절까지
          {' '}
          <br />
          간편하게 선택하고 여기저기 숨겨진 나만의 등산로를 찾아보세요!
          {' '}
          <br />
        </Context>

        <Link to="/questions">Start</Link>
      </ContentsBox>

    </Container>
  );
}
