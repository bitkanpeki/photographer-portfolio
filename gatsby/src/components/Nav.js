import { useState, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.nav`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr fit-content(100px);
`
const Name = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 1px;
`

const List = styled.ul`
  display: none;
  grid-template-columns: repeat(4, fit-content(50px));
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  line-height: 1.8;

  li {
    margin: 0;
  }

  li > a {
    display: block;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: 0.2s ease border-color, 0.2s ease color;

    &:hover {
      border-bottom-color: #000000;
      opacity: 0.8;
    }
  }

  .active {
    border-bottom-color: #000000;
  }
  @media (min-width: 769px) {
    display: grid;
  }
`

const Burger = styled.div`
  z-index: 3;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    width: 20px;
    height: 3px;
    border-radius: 2px;
    background-color: #000;
    transition: transform 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    :nth-child(2) {
      margin: 4px 0;
      width: 24px;
    }

    :nth-child(3) {
      width: 16px;
    }

    ${({ menuOpen }) =>
      menuOpen &&
      `:nth-child(1) {transform: rotate(-45deg); width: 24px; position: absolute; top: 0;}
     :nth-child(2) {opacity: 0;}
     :nth-child(3) {transform: rotate(45deg); width: 24px; position: absolute; top: 0;}
  `}
  }

  @media (min-width: 769px) {
    display: none;
  }
`

// const Overlay = styled.div`
//   opacity: ${({ menuOpen }) => (menuOpen ? '0.7' : '0')};
//   visibility: ${({ menuOpen }) => (menuOpen ? 'visible' : 'hidden')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   transition: all 300ms;
//   background-color: black;
// `

const MobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 3.2rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: 1px;
  list-style: none;
  background: white;
  font-size: 1.8rem;
  width: 350px;
  overflow: hidden;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 100%;
  width: 100%;
  opacity: ${({ menuOpen }) => (menuOpen ? `1` : `0`)};
  ${({ menuOpen }) => menuOpen && `transform: translateX(-100%);`}
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, opacity 300ms cubic-bezier(0.4, 0, 1, 1) 0s;
  overflow-y: auto;

  li {
    margin-bottom: 4rem;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMobileMenu = () => setMenuOpen(false)

  return (
    <Container>
      <Name>
        <Link to="/">Akiko Fanning</Link>
      </Name>
      <List>
        <li>
          <Link to="/" activeClassName="active">
            Portraits
          </Link>
        </li>
        <li>
          <Link to="/weddings" activeClassName="active">
            Weddings
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </List>

      <Burger menuOpen={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
        <div />
        <div />
        <div />
      </Burger>

      <MobileList menuOpen={menuOpen}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Portraits
          </Link>
        </li>
        <li>
          <Link to="/weddings" onClick={closeMobileMenu}>
            Weddings
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </MobileList>
    </Container>
  )
}

export default Nav
