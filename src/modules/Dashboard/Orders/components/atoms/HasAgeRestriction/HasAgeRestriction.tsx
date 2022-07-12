import {FC} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {HasAgeRestrictionTypes} from './types';

export const HasAgeRestriction: FC<HasAgeRestrictionTypes> = ({value}) =>
  value ? (
    <CheckCircleIcon style={{color: 'green'}} />
  ) : (
    <CancelIcon style={{color: 'red'}} />
  );
