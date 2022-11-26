import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {Faq} from '../Faq';
import {Play} from '../Play';
import {
  Container,
  GuideText,
  TextContainer,
  ImageContainer,
  GreenContainer,
  GuideContainer,
  InstructionTitle,
  InstructionAction,
} from './Instructions.styled';

export const Instructions: FC = () => {
  const {t} = useTranslation();

  return (
    <Container data-testid="instructions_test">
      <ImageContainer>
        <GreenContainer>
          <Faq color="#009940" />
        </GreenContainer>
      </ImageContainer>
      <TextContainer>
        <InstructionTitle>{t('download_orders.instructions')}</InstructionTitle>
        <InstructionAction>1. {t('download_orders.instro1')}</InstructionAction>
        <InstructionAction>2. {t('download_orders.instro2')}</InstructionAction>
        <InstructionAction>3. {t('download_orders.instro3')}</InstructionAction>
      </TextContainer>
      <GuideContainer>
        <Play color="#2d79f4" />
        <GuideText>{t('download_orders.btn_title')}</GuideText>
      </GuideContainer>
    </Container>
  );
};
