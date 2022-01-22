import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: var(--window-height);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = () => {
  return <Wrapper>Loading...</Wrapper>;
};

export default Loader;
