import React from 'react'
import styled from 'styled-components'

const MinCSS = () => (
  <>
    <Element>
      <div />
    </Element>
    <Label>width: min(50%, 500px)</Label>
  </>
)

const Element = styled.div`
  align-items: center;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  height: 11.5rem;
  justify-content: center;
  width: 100%;

  div {
    background-color: #468ef0;
    border-radius: 0.5rem;
    height: 4rem;
    width: min(50%, 500px);
  }
`

const Label = styled.p`
  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
    'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
    'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
    monospace;
  text-align: center;
  width: 100%;
`

export default MinCSS
