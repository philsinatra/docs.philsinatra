import styled from 'styled-components'

const StyledNav = styled.div`
  --webkit-overflow-scrolling: touch;
  align-items: flex-start;
  background-color: var(--secondary-background);
  color: var(--secondary-foreground);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  overflow-y: scroll;
  padding: 3rem 0;
  position: fixed;
  top: 0;
  transform: translateX(-100%);
  transition: transform 225ms cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 80vw;
  z-index: 200;

  @media screen and (min-width: 48em) {
    max-width: 40vw;
  }

  @media screen and (min-width: 64em) {
    justify-content: flex-end;
    max-width: 30vw;
  }

  &.is-open {
    transform: translateX(0);
  }

  ul {
    list-style: none;
    margin: 0 0 3rem;
    padding: 0;

    li {
      font-weight: bold;
      margin: 0;
      padding: 0;
      text-transform: uppercase;

      ul {
        margin-top: 0.75rem;
        position: relative;
        left: -0.75rem;

        li {
          font-size: 0.9rem;
          font-weight: normal;
          margin: 0;
          text-transform: none;

          a {
            color: var(--secondary-foreground);
            display: block;
            font-weight: normal;
            padding: 0.5rem 0.75rem;
            text-decoration: none;
            transition: background-color var(--duration-100) ease-in-out;

            &:hover,
            &:focus {
              background-color: var(--highlight);
            }
          }
        }
      }
    }
  }
`

export default StyledNav
