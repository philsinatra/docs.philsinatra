import { Header, Main, Nav, SEO } from './'
import React, { useEffect } from 'react'

import GitHubIcon from './GitHubIcon'
import Prism from 'prismjs'
import styled from 'styled-components'

const Layout = ({ meta, children }) => {
  useEffect(() => {
    if (typeof window !== undefined) Prism.highlightAll()
  }, [])

  return (
    <>
      <SEO title={meta.title} />
      <Wrapper>
        <GitHubIcon />
        <Header />
        <Nav />
        <Main>
          <h1 style={{ marginBottom: '0' }}>{meta.title}</h1>
          <p style={{ marginTop: '0' }}>
            <small>Last updated: {meta.date}</small>
          </p>
          {children}
        </Main>
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
