import styled from 'styled-components'

const StyledMain = styled.main`
  align-items: flex-start;
  background-color: var(--primary-background);
  color: var(--primary-foreground);
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  padding-bottom: 3rem;
  padding-top: 6rem;
  width: 100vw;

  @media screen and (min-width: 64em) {
    margin: 0 auto 0 30vw;
    width: 70vw;
  }

  a {
    color: var(--link);
    transition: color var(--duration-100) ease-in-out;

    &:visited {
      color: var(--visited);
    }

    &:hover,
    &:focus {
      color: var(--hover);
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    a {
      &:hover,
      &:focus {
        outline: 2px dotted white;
      }
    }
  }

  .wrapper {
    line-height: 1.4;
    margin: 0 auto;
    max-width: 85ch;
    padding: 0 1.5rem;
    width: 100%;

    @media screen and (min-width: 37.5em) {
      padding: 0 3rem;
    }
  }
`

export default StyledMain
