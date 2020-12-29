import React from 'react'
import styled from 'styled-components'
import menuIcon from '@iconify/icons-tabler/menu'
import { Icon } from '@iconify/react'
import { useAppContext } from '../state'

const Header = () => {
  const { setNavOpen } = useAppContext()!

  return (
    <StyledHeader>
      <button onClick={() => setNavOpen(true)}>
        <Icon icon={menuIcon} style={{ fontSize: '24px' }} />
      </button>
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

  button {
    align-items: center;
    background-color: transparent;
    border: 0;
    color: var(--color-white);
    display: flex;
    height: 2rem;
    justify-content: center;
    padding: 0;
    transition: background-color var(--duration-100) ease-in-out;
    width: 2rem;

    &:hover {
      background-color: var(--highlight);
      cursor: pointer;
    }

    &:focus {
      background-color: var(--highlight);
    }
  }
`

export default Header
