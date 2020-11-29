import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { device } from '../styles/Breakpoints'

const Gallery = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${device.small} {
    &::after {
      content: '';
      flex-grow: 999999999;
    }
  }
`

const Container = styled.div`
  width: ${({ aspectRatio }) => 400 * aspectRatio}px;
  flex-grow: ${({ aspectRatio }) => 400 * aspectRatio};

  .gatsby-image-wrapper:hover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const SinglePortrait = ({ portrait }) => (
  <Container aspectRatio={portrait.image.asset.fluid.aspectRatio}>
    <Link to={`/portraits/${portrait.slug.current}`}>
      <Img fluid={portrait.image.asset.fluid} alt={portrait.name} />
    </Link>
  </Container>
)

const PortraitsList = ({ portraits }) => (
  <Gallery>
    {portraits.map((portrait) => (
      <SinglePortrait key={portrait.slug.current} portrait={portrait} />
    ))}
  </Gallery>
)

export default PortraitsList
