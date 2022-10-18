import styled from 'styled-components'

export const ResultStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  section {
    text-align: center;
    padding-left: 5rem;
    padding-top: 5rem;
  }
  h1,
  h3 {
    padding-bottom: 5rem;
  }
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray1};
  }
`
