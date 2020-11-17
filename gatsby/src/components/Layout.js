import styled from 'styled-components'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Nav from './Nav'
import Footer from './Footer'

const Container = styled.div`
  padding: 7rem;

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`
const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Container>
      <Nav />
      {children}
      <Footer />
    </Container>
  </>
)

export default Layout
