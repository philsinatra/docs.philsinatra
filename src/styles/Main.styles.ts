import styled from 'styled-components'

const StyledMain = styled.main`
  align-items: flex-start;
  background-color: var(--primary-background);
  color: var(--primary-foreground);
  display: flex;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 6rem;

  .wrapper {
    margin: 0 auto;
    max-width: 85ch;
    padding: 0 3rem;
    width: 100%;

    @media screen and (min-width: 64em) {
      margin: 0 0 0 40vw;
    }
  }
`

export default StyledMain
