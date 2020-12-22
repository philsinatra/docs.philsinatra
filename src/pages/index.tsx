import Link from 'next/link'
import React from 'react'
import { pages } from '../data/pages.json'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Index = () => (
  <>
    <h1>Index Page</h1>
    <p>Running in {process.env.NODE_ENV} mode.</p>
    <Link href="/hello">hello</Link>
    <Grid>
      {pages.map(page => (
        <li key={uuidv4()}>
          <Link href="">{page}</Link>
        </li>
      ))}
    </Grid>
  </>
)

const Grid = styled.ul`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(min(10rem, 100%), 1fr));
  list-style: none;
  margin: 0 auto;
  max-width: 1100px;
  padding: 0;
  width: 80vw;

  li {
    border: 1px solid red;
    margin: 0;
    padding: 0;
  }
`

export default Index
