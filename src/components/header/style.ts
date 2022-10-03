import styled from 'styled-components'

export const HeaderStyle = styled.header`
  padding-top: 1rem;
  padding-left: 5rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.gray1};
  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .links {
    display: flex;
    gap: 1rem;
  }
`
