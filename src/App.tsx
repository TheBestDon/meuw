import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PageWrapper } from './state'
import Breeds from './components/Cats/Breeds'
import styled from 'styled-components'
import Toggle from './components/Toggle'

const AppStyles = styled.div`
  margin: 50px auto;
  width: 50vw;
  min-height: var(--window-height);

  .container {
    background-color: var(--clr-bg-2);
    border: 4px solid var(--clr-secondary);
    border-radius: 6px;
    padding: 25px;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`

function App() {
  return (
    <AppStyles>
      <Router>
        <PageWrapper>
          <div className="container">
            <header>
              <Toggle />
            </header>
            <Routes>
              <Route path="/*" element={<Breeds />} />
            </Routes>
          </div>
        </PageWrapper>
      </Router>
    </AppStyles>
  )
}

export default App
