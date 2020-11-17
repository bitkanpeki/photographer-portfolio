import Img from 'gatsby-image'
import styled from 'styled-components'

const PortraitsGrid = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  &::after {
    content: '';
    flex-grow: 999999999;
  }
`

const ImgStyled = styled(Img)`
  width: ${({ aspectRatio }) => 400 * aspectRatio}px;
  flex-grow: ${({ aspectRatio }) => 400 * aspectRatio};

  & :hover:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const PortraitsList = ({ portraits }) => {
  const sortedPortraits = portraits
    .slice()
    .sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))

  return (
    <PortraitsGrid>
      {sortedPortraits.map((portrait) => (
        <ImgStyled
          key={portrait._id}
          fluid={portrait.image.asset.fluid}
          alt={portrait.name}
          aspectRatio={portrait.image.asset.fluid.aspectRatio}
        />
      ))}
    </PortraitsGrid>
  )
}

export default PortraitsList
