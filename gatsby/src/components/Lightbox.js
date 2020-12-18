import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useState } from 'react'
import { BiX } from 'react-icons/bi'
import styled, { keyframes } from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.98);
  height: 100%;
  width: 100%;
  z-index: 1000;
`
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImgStyled = styled.div`
  max-height: 96vh;
  width: ${({ aspectRatio }) => 96 * aspectRatio}vh;
  max-width: 96vw;
  cursor: default;
  transition: opacity 500ms ease;
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

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`

const ImgFade = styled(Img)`
  animation: ${FadeInAnimation} ease 0.6s;
`

const Lightbox = ({ selectedImageId, handleCloseLightbox }) => {
  const data = useStaticQuery(graphql`
    query {
      fullSize: allSanityPortraits(sort: { fields: _createdAt, order: DESC }) {
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
  `)

  const { nodes } = data.fullSize

  const initialImageIndex = nodes.findIndex(
    (element) => element._id === selectedImageId
  )

  const [selectedImageIndex, setSelectedImageIndex] = useState(
    initialImageIndex
  )

  const dataLength = nodes.length

  const selectedImage = nodes[selectedImageIndex]

  const handlePrevious = () => {
    setSelectedImageIndex((selectedImageIndex - 1 + dataLength) % dataLength)
  }

  const handleNext = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % dataLength)
  }

  return (
    <Overlay>
      <Container>
        <ImgStyled
          aspectRatio={selectedImage.image.asset.fluid.aspectRatio}
          onClick={handleNext}
        >
          <ImgFade fluid={selectedImage.image.asset.fluid} />
        </ImgStyled>
      </Container>
      <IconStyled onClick={handleCloseLightbox} />
    </Overlay>
  )
}

export default Lightbox
