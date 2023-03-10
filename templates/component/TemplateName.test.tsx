import { render, screen } from '@testing-library/react'
import { TemplateName } from './TemplateName'

describe('<TemplateName />', () => {
  test('#1. Exist - Render correctly', () => {
    render(<TemplateName />)

    const templateName = screen.getByTestId('template-name')

    expect(templateName).toBeInTheDocument()
  })
})
