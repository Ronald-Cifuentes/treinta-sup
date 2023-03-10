import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('<App />', () => {
  test('#1. Exist - Render correctly', () => {
    render(<App />)

    const app = screen.getByTestId('app')

    expect(app).toBeInTheDocument()
  })
})
