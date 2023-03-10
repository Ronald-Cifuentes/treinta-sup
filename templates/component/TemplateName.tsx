import { FC } from 'react'
import { TemplateNameContainer } from './TemplateName.styled'
import { TemplateNameProps } from './types'

const TemplateName: FC<TemplateNameProps> = ({ dataTestId = 'template-name' }) => (
  <TemplateNameContainer data-testid={dataTestId}>
    <h1>TemplateName component</h1>
  </TemplateNameContainer>
)

export default TemplateName
