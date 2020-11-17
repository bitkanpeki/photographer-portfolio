import { createGlobalStyle } from 'styled-components'
import 'fontsource-open-sans'

const Typography = createGlobalStyle`

  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
  }

  p {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    line-height: 1.5;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    margin: 0;
    line-height: 1.25;
  }

  h1 {
    font-size: 2.5rem;
  }

  a {
    color: var(--black);
    text-decoration: none;
  }
`

export default Typography
