import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { device } from '../styles/Breakpoints'
import Lightbox from './Lightbox'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;

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
  //max-width: 500px;

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
  const data = useStaticQuery(
    graphql`
      query gallery {
        galleryImages: allSanityPortraits(
          sort: { fields: _createdAt, order: DESC }
        ) {
          nodes {
            id
            name
            image {
              asset {
                fluid(maxWidth: 600) {
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
            id
            name
            image {
              asset {
                fluid(maxWidth: 2000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(1)

  const { nodes } = data.lightboxImages

  const initialImageIndex = nodes.findIndex(
    (element) => element.id === selectedImageId
  )

  const dataLength = nodes.length

  const selectedImage = nodes[selectedImageIndex]

  const handlePrevious = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + dataLength) % dataLength
    )
  }

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % dataLength)
  }

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
        {data.galleryImages.nodes.map((thumbnail) => (
          <ImgContainer
            key={thumbnail.id}
            aspectRatio={thumbnail.image.asset.fluid.aspectRatio}
            onClick={() => handleOpenLightbox(thumbnail.id)}
          >
            <Img fluid={thumbnail.image.asset.fluid} alt={thumbnail.name} />
          </ImgContainer>
        ))}
      </Container>

      {showLightbox && selectedImageId !== null && (
        <Lightbox
          selectedImage={selectedImage}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleCloseLightbox={handleCloseLightbox}
        />
      )}
    </>
  )
}

export default Gallery
