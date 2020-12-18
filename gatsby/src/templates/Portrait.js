import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { BiX } from 'react-icons/bi'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconStyled = styled(BiX)`
  position: absolute;
  top: 2vh;
  right: 2vh;
  z-index: 1001;
  color: #ccc;
  font-size: 32px;
  cursor: pointer;
`

const ContainerLink = styled.div`
  margin-top: 2rem;
  font-size: 1.3rem;
  font-weight: 800;
`

const ContainerImg = styled.div`
  height: 96vh;
  width: ${({ aspectRatio }) => 96 * aspectRatio}vh;
  //max-height: 90vw;
  max-width: 90vw;
  cursor: default;
`

export default ({ data, pageContext }) => {
  const sources = [
    { ...data.mobileImage.image.asset.fluid, media: `(max-width: 767px)` },
    {
      ...data.desktopImage.image.asset.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <Container>
      <IconStyled to="/" />
      <ContainerImg
        aspectRatio={data.mobileImage.image.asset.fluid.aspectRatio}
      >
        <Link to={`/portraits/${pageContext.next.slug.current}`}>
          <Img imgStyle={{ cursor: 'default' }} fluid={sources} />
        </Link>
      </ContainerImg>

      {/* <ContainerLink>
        <Link to={`/portraits/${pageContext.prev.slug.current}`}>Prev</Link>
        <Link
          to={`/portraits/${pageContext.next.slug.current}`}
          style={{ marginLeft: '1rem' }}
        >
          Next
        </Link>
      </ContainerLink> */}
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    mobileImage: sanityPortraits(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    desktopImage: sanityPortraits(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 1500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
