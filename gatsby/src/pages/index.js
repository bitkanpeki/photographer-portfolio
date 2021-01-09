import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

const HomePage = ({ data }) => (
  <Layout>
    <Gallery allImages={data} />
  </Layout>
)

export const query = graphql`
  query {
    galleryImages: allSanityPortraits(
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        _id
        name
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    lightboxImages: allSanityPortraits(
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        _id
        name
        image {
          asset {
            fluid(maxWidth: 1500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default HomePage
