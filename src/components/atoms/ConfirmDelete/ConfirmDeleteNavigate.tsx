import {FC} from 'react';

import {RightBarContainer} from 'components/molecules/RightBarContainer/RightBarContainer';

import {DeleteTypes} from './confirmDeleteTypes';
import {ConfirmDeleteContainer} from './ConfirmDeleteContainer';

export const ConfirmDeleteNavigate: FC<DeleteTypes> = ({
  textConfirm,
  deletionQuestionText,
}) => (
  <RightBarContainer title="">
    <ConfirmDeleteContainer
      textConfirm={textConfirm}
      rightBarType="navigationRightBar"
      deletionQuestionText={deletionQuestionText}
    />
  </RightBarContainer>
);
