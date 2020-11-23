import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PortraitsList from '../components/PortraitsList'

const HomePage = ({ data }) => {
  const portraits = data.portraits.nodes

  return (
    <Layout>
      <PortraitsList portraits={portraits} />
    </Layout>
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
