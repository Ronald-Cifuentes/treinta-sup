import {FC} from 'react';
import {Pagination} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {PropTypesSpecialPagination} from './types';

const useStyles = makeStyles({
  root: {
    fontSize: '15px',
    fontWeight: '400',
    minWidth: '24px',
    height: '24px',
    '& .MuiPaginationItem-circular': {
      minWidth: '24px',
      height: '24px',
    },
    '& .Mui-selected': {
      backgroundColor: '#FEE280',
      fontSize: '15px',
      fontWeight: '700',
      minWidth: '24px',
      height: '24px',
    },
  },
});

export const SpecialPagination: FC<PropTypesSpecialPagination> = ({
  onChange,
  count,
}) => {
  const classes = useStyles();
  return (
    <Pagination
      data-testid="special-pagination"
      count={count}
      className={classes.root}
      onChange={onChange}
    />
  );
};
