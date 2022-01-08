import React from 'react'
import styled from 'styled-components'
import { Showroom } from './components/Showroom'

const App = () => {
  return (
    <Container>
      <Showroom />
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 80%;
  margin: 80px auto;

  @media (max-width: 750px) {
    width: 90%;
  }
`
