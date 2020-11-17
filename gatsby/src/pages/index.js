import { graphql } from 'gatsby'
import PortraitsList from '../components/PortraitsList'

const HomePage = ({ data }) => {
  const portraits = data.portraits.nodes

  console.log(portraits)
  return (
    <>
      <PortraitsList portraits={portraits} />
    </>
  )
}

export default HomePage

export const query = graphql`
  query PortraitsQuery {
    portraits: allSanityPortraits {
      nodes {
        _id
        _createdAt
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
