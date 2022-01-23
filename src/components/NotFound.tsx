import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .code {
    font-size: 5rem;
  }
  .text {
    font-size: 2rem;
  }

`
const NotFound = () => {
  return (<Wrapper>
      <span className='code'>404</span>
      <span className='text'>Page not found</span>
  </Wrapper>);
};

export default NotFound;
