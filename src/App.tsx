import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { PageWrapper } from './state'
import Breeds from './components/Cats/Breeds'
import styled from 'styled-components'

const AppStyles = styled.div`
  margin: 50px auto;
  width: 380px;

  .container {
    background-color: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 6px;
    padding: 25px;
  }
`

function App() {
  return (
    <AppStyles>
      <Router>
        <PageWrapper>
          <div className="container">
            <header>
              <Link to="/">Home</Link>
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
