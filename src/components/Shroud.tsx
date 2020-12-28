import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { useLockBodyScroll } from '../hooks'

const Shroud = ({ open, setOpen }) => {
  useLockBodyScroll()

  return (
    <StyledShroud hidden={open ? false : true} onClick={() => setOpen(false)} />
  )
}

Shroud.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

const StyledShroud = styled.div`
  background-color: hsla(0, 0%, 0%, 0.8);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;

  @media screen and (min-width: 64em) {
    display: none;
  }
`

export default Shroud
