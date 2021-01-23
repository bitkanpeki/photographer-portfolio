import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/Reusable'

const Footer = styled.footer`
  background-color: #171717;
  color: rgba(243, 241, 241, 0.8);
  padding: 2rem;
  margin-top: 5rem;
`

const FooterComponent = () => (
  <Footer>
    <Container>Photographer Portfolio</Container>
  </Footer>
)

export default FooterComponent
