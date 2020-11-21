import { graphql } from 'gatsby'
import PortraitsList from '../components/PortraitsList'

const HomePage = ({ data }) => {
  const portraits = data.portraits.nodes

  return (
    <>
      <PortraitsList portraits={portraits} />
    </>
  )
}

export default HomePage

export const query = graphql`
  query PortraitsQuery {
    portraits: allSanityPortraits(sort: { fields: _createdAt, order: DESC }) {
      nodes {
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
