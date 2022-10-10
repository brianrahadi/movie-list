import React from 'react';
import { Container } from 'react-bootstrap'

const Detail = ({ text }) => {
  const style = {
    paddingTop: '100px',
    color: 'white',
    left: '100px'
  }

  return (
    <Container fluid style={style}>
      {text ? <h1>{text}</h1> : null}
    </Container>
  );
};

export default Detail;
