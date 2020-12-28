import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  margin: 3rem auto;

  img {
    margin: 0;
    max-width: 100%;
  }

  figcaption {
    align-items: center;
    display: flex;
    font-size: 80%;
    margin-top: 1rem;
    justify-content: center;
  }
`

const Figure = ({ children }) => (
  <StyledFigure style={{ margin: '3rem auto' }}>{children}</StyledFigure>
)

export default Figure
