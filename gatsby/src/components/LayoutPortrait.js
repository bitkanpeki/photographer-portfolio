import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'
import Gallery from './Gallery'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1 0 auto;
  margin: 0 7rem;
`

const LayoutPortrait = ({ children }) => (
  <Container>
    <Nav />
    <Content>
      <Gallery />
    </Content>
    {children}
    <Footer />
  </Container>
)

export default LayoutPortrait
