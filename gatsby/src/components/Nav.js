import { Link } from 'gatsby'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/">Portraits</Link>
      </li>
      <li>
        <Link to="/weddings">Weddings</Link>
      </li>
      <li>
        <Link to="/children">Children</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
