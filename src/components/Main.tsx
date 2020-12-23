import React from 'react'
import { StyledMain } from '../styles'

const Main = ({ children }) => {
  return (
    <StyledMain role="main">
      <div className="wrapper">{children}</div>
    </StyledMain>
  )
}

export default Main
