import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useState } from 'react'

import styled from 'styled-components'
import { device } from '../styles/Breakpoints'
import Lightbox from './Lightbox'

const Container = styled.div`
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

const ImgContainer = styled.div`
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

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      thumbnails: allSanityPortraits(
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
    }
  `)

  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState(null)

  const handleOpenLightbox = (id) => {
    setShowLightbox(true)
    setSelectedImageId(id)
  }

  const handleCloseLightbox = () => {
    setShowLightbox(false)
    setSelectedImageId(null)
  }

  return (
    <>
      <Container>
        {data.thumbnails.nodes.map((thumbnail) => (
          <ImgContainer
            key={thumbnail._id}
            aspectRatio={thumbnail.image.asset.fluid.aspectRatio}
            onClick={() => handleOpenLightbox(thumbnail._id)}
          >
            <Img fluid={thumbnail.image.asset.fluid} alt={thumbnail.name} />
          </ImgContainer>
        ))}
      </Container>

      {showLightbox && selectedImageId !== null && (
        <Lightbox
          selectedImageId={selectedImageId}
          handleCloseLightbox={handleCloseLightbox}
        />
      )}
    </>
  )
}

export default Gallery
