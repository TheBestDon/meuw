import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import BreedIndex from './BreedIndex'
import Breed from './Breed'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
  }

  .Logo {
    width: 75px;
    margin: 0 auto 25px;
  }
`

const Breeds = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src="/assets/img/cat_logo.svg" alt="Cat Breeds" className="Logo" />
      </Link>
      <Routes>
        <Route path="/" element={<BreedIndex />} />
        <Route path=":id" element={<Breed />} />
      </Routes>
    </Wrapper>
  )
}

export default Breeds
