import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../state'

const Header = () => {
  const { setNavOpen } = useAppContext()!

  return (
    <StyledHeader>
      <button onClick={() => setNavOpen(true)}>menu</button>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--color-black);
  color: var(--color-gray-900);
  height: 3rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 190;

  @media screen and (min-width: 64em) {
    display: none;
  }
`

export default Header
