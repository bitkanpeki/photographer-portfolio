import * as React from 'react'
import { graphql, Link } from 'gatsby'

const Portrait = ({ data }) => (
  <>
    <Link to="/">Go HOME</Link>
    {data.sanityPortraits.name}
  </>
)

export const query = graphql`
  query($id: String!) {
    sanityPortraits(id: { eq: $id }) {
      name
    }
  }
`

export default Portrait
