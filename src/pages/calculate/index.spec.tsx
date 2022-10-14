import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import Calculate from '.'

it('See result text', () => {
  render(
    <ThemeProvider theme={theme}>
      <Calculate />
    </ThemeProvider>
  )
  screen.getByText(/Cálculo de emissões de carbono/)
})
