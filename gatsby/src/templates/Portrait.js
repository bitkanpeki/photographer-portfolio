import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerLink = styled.div``

const ContainerImg = styled.div`
  width: ${({ aspectRatio }) => 600 * aspectRatio}px;
  cursor: default;
`

export default function SinglePortraitPage({
  data: { portrait },
  pageContext,
}) {
  return (
    <Container>
      <ContainerLink>
        <Link to={`/portraits/${pageContext.prev.slug.current}`}>Prev</Link>
        <Link to={`/portraits/${pageContext.next.slug.current}`}>Next</Link>
      </ContainerLink>

      <ContainerImg aspectRatio={portrait.image.asset.fluid.aspectRatio}>
        <Link to={`/portraits/${pageContext.next.slug.current}`}>
          <Img
            imgStyle={{ cursor: 'default' }}
            fluid={portrait.image.asset.fluid}
          />
        </Link>
      </ContainerImg>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    portrait: sanityPortraits(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
