import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [quote, updateQuote] = useState({});

  useEffect(() => {
    handleOnClick();
  }, []);

  const handleOnClick = () => {
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      .then(response => response.json())
      .then(response => updateQuote(response[0]));
  };

  return (
    <Container>
      <Quote quote={quote} />
      <Button onClick={handleOnClick}>Obtener Frase</Button>
    </Container>
  );
}

export default App;
