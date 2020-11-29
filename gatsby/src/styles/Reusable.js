import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ full }) => (full ? '100%' : '1120px')};
  margin: 0 auto;
`
