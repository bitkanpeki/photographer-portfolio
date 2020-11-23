import Nav from './Nav'
import FooterComponent from './Footer'

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <FooterComponent />
  </>
)

export default Layout
