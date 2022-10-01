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
    background-color: ${({ theme }) => theme.colors.primary1}
  }

  h1, h2, h3, h4{
    font-family: "Ultra", serif; ;
  }

  p, a, li{
    font-family: "PT Serif", serif; 
  }
  
  a{
    text-decoration: none;
  }
`
