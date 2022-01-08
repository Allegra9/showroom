import React from 'react'
import styled from 'styled-components'
// import { Showroom } from './components/Showroom'
import { Todos } from './components/Todos'

const App = () => {
  return (
    <Container>
      <Todos />
      {/* <Showroom /> */}
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
