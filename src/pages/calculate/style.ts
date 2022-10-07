import styled from 'styled-components'

export const CalculateStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  h1,
  form {
    padding-left: 5rem;
  }
  h1 {
    padding-top: 5rem;
  }
  form {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    label {
      padding-bottom: 0.5rem;
    }
    select {
      border: 2px solid ${({ theme }) => theme.colors.gray3};
      border-radius: 8px;
      width: 60%;
      background-color: ${({ theme }) => theme.colors.primary2};
      color: ${({ theme }) => theme.colors.gray3};
      padding: 0.5rem;
    }
  }
`
