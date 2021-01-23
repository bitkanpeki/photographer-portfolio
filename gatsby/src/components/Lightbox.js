import React, { useState } from 'react'
import Img from 'gatsby-image'

import { BiX } from 'react-icons/bi'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import styled, { keyframes } from 'styled-components'
import { useLockBodyScroll } from '../utils/hooks'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.95);
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
  max-height: 80vh;
  width: ${({ aspectRatio }) => 80 * aspectRatio}vh;
  max-width: 80vw;
  cursor: default;
`

const IconBiX = styled(BiX)`
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
  user-select: none;
`

const Previous = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`

const ChevronLeft = styled(BsChevronCompactLeft)`
  color: #ccc;
  font-size: 32px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 250ms;

  ${Previous}:hover & {
    opacity: 1;
  }
`

const Next = styled.div`
  position: absolute;
  top: 0;
  left: 50vw;
  z-index: 1001;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 40px;
`

const ChevronRight = styled(BsChevronCompactRight)`
  color: #ccc;
  font-size: 32px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 250ms;

  ${Next}:hover & {
    opacity: 1;
  }
`

const Lightbox = ({
  selectedImage,
  handlePrevious,
  handleNext,
  handleCloseLightbox,
}) => {
  useLockBodyScroll()

  return (
    <Overlay>
      <Container>
        <ImgStyled aspectRatio={selectedImage.image.asset.fluid.aspectRatio}>
          <Img fluid={selectedImage.image.asset.fluid} />
        </ImgStyled>
      </Container>
      <Previous onClick={handlePrevious}>
        <ChevronLeft onClick={handlePrevious} />
      </Previous>
      <Next onClick={handleNext}>
        <ChevronRight onClick={handleNext} />
      </Next>
      <IconBiX onClick={handleCloseLightbox} />
    </Overlay>
  )
}

export default Lightbox
