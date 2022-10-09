import { createGlobalStyle } from 'styled-components'
import '@fontsource/ultra'
import '@fontsource/pt-serif'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary1};
    overflow: hidden;
  }

  h1, h2, h3, h4{
   font-weight: 700;
  }
  
  h1, h2, h3, h4,p, a, li, button{
    font-family: "PT Serif", serif; 
    color: ${({ theme }) => theme.colors.gray3}
  }
  
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray3};
  }
  
  button{
    font-weight: 700;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .btnPrimary {
      background:linear-gradient(92.22deg, #465442 -10.98%, #6D8367 139.85%);
      color: ${({ theme }) => theme.colors.primary1};
    }

    .btnSecundary {
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.gray2};
      color:  ${({ theme }) => theme.colors.gray2};
    }

    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
`
