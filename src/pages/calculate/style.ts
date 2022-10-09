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
      padding: 0.5rem 0 0 0;
    }
    input {
      margin-bottom: 0.5rem;
    }
    select,
    input {
      border: 2px solid ${({ theme }) => theme.colors.gray3};
      border-radius: 8px;
      width: 90%;
      padding: 0.3rem;
      background-color: ${({ theme }) => theme.colors.primary2};
      color: ${({ theme }) => theme.colors.gray3};
    }
    button {
      width: fit-content;
    }
  }
`
