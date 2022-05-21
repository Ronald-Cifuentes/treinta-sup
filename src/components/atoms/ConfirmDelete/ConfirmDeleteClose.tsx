import {FC} from 'react';

import {RightBarContainerHeader} from 'components/molecules/RightBarContainer/RightBarContainerHeader';

import {DeleteTypes} from './confirmDeleteTypes';
import {ConfirmDeleteContainer} from './ConfirmDeleteContainer';

export const ConfirmDeleteClose: FC<DeleteTypes> = ({
  textConfirm,
  deletionQuestionText,
}) => (
  <RightBarContainerHeader title="" lineColor="neutrals" lineColorType="100">
    <ConfirmDeleteContainer
      textConfirm={textConfirm}
      rightBarType="closeRightBar"
      deletionQuestionText={deletionQuestionText}
    />
  </RightBarContainerHeader>
);
