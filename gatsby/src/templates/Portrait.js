import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { BiX } from 'react-icons/bi'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackBtn = styled(Link)`
  font-size: 3.5rem;
  padding: 0.5rem;
  font-weight: 800;
`

const ContainerLink = styled.div`
  margin-top: 2rem;
  font-size: 1.3rem;
  font-weight: 800;
`

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
      <BackBtn to="/">
        <BiX />
      </BackBtn>

      <ContainerImg aspectRatio={portrait.image.asset.fluid.aspectRatio}>
        <Link to={`/portraits/${pageContext.next.slug.current}`}>
          <Img
            imgStyle={{ cursor: 'default' }}
            fluid={portrait.image.asset.fluid}
          />
        </Link>
      </ContainerImg>

      <ContainerLink>
        <Link to={`/portraits/${pageContext.prev.slug.current}`}>Prev</Link>
        <Link
          to={`/portraits/${pageContext.next.slug.current}`}
          style={{ marginLeft: '1rem' }}
        >
          Next
        </Link>
      </ContainerLink>
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
