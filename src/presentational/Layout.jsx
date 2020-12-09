import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '100%',
  height: '100vh',
  boxSizing: 'border-box',
  padding: '3rem',
});

const Header = styled.header({
  height: '7%',
});

const ContentBox = styled.div({
  height: '93%',
});

export default function Layout({ children }) {
  return (
    <Container>
      <Header>
        home
      </Header>
      <ContentBox>
        {children}
      </ContentBox>
    </Container>
  );
}
