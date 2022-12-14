import {Box, ColorTypesTag, Typography} from '@30sas/web-ui-kit-core';

import {FC} from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Tag} from 'components/atoms/TagCustom';
import {Left, Right, Table, Size} from './StepTwoSuccess.styled';

import {RowStateProps} from './types';

export const RowState: FC<RowStateProps> = ({
  tagLeftColor = 'info',
  tagLeftText = 'Confirmado',
  leftNumberOrders = '50 órdenes',
  tagRightColor = 'success',
  tagRightText = 'Entregado',
  dataTestId = 'row-state-id',
}) => (
  <Box mt="8px" data-testid={dataTestId}>
    <Table>
      <Left>
        <Size>
          <Tag variant={tagLeftColor as ColorTypesTag} label={tagLeftText} />
        </Size>
        <Typography variant="Medium" margin="0" color="gray" colorType="700">
          {leftNumberOrders}
        </Typography>
      </Left>
      <Right>
        <ArrowForwardIcon />
        <Size>
          <Tag variant={tagRightColor as ColorTypesTag} label={tagRightText} />
        </Size>
      </Right>
    </Table>
  </Box>
);
