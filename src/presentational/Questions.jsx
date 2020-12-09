import React from 'react';

import styled from '@emotion/styled';

import QuestionItem from 'presentational/QuestionItem';

const Container = styled.div({
  width: '100%',
  height: '90%',
  display: 'flex',
  whiteSpace: 'nowrap',
  overflowX: 'scroll',
  scrollBehavior: 'smooth',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
});

const Layout = styled.div({
  height: '100vh',
  width: '100%',
});

export default function Questions({ questions, onChange }) {
  return (
    <Layout>
      <Container>
        {
          questions.map(({
            id, category, question, options,
          }) => (
            <QuestionItem
              key={id}
              category={category}
              question={question}
              options={options}
              onChange={onChange}
            />
          ))
        }
      </Container>

      <div>
        timeline
      </div>

    </Layout>
  );
}
