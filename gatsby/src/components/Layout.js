import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1 0 auto;
  margin: 0 7rem;
`

const Layout = ({ children }) => (
  <Container>
    <Nav />
    <Content>{children}</Content>
    <Footer />
  </Container>
)

export default Layout
