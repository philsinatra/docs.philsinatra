import { Main, Nav } from './'
import React, { useEffect } from 'react'

import { Header } from './'
import Prism from 'prismjs'
import styled from 'styled-components'

const Layout = ({ children }) => {
  useEffect(() => {
    if (typeof window !== undefined) Prism.highlightAll()
  }, [])

  return (
    <>
      <Wrapper>
        <Header />
        <Nav />
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  @media screen and (min-width: 64em) {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
`

export default Layout

// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/components/layout.js
