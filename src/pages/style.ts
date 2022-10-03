import styled from 'styled-components'

export const HomeStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  img {
    height: 100vh;
  }

  h1,
  p,
  .buttons {
    padding-left: 5rem;
    padding-top: 2rem;
  }

  h1 {
    padding-top: 6rem;
    font-size: 3rem;
  }

  .buttons {
    display: flex;
    gap: 3rem;
  }
`
