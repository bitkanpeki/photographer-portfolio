import React from 'react'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

// const Container = styled.div`
//   padding: 0 7rem;

//   @media screen and (max-width: 500px) {
//     padding: 2rem;
//   }
// `
const Global = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    {children}
  </>
)

export default Global
