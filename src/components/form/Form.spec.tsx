import { render, screen } from '@testing-library/react'
import Form from './Form'

it('testing select', () => {
  render(<Form />)
  expect(screen.getByText('Atividade:')).toBeInTheDocument()
})
