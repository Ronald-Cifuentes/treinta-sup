import {FC} from 'react';
import {Snackbar} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useTranslation} from 'react-i18next';
import {SpecialSelect} from 'components/atoms/SpecialSelect';
import {optionsChangeState} from './ChangeStates.mock';
import {PropTypesChangeStates} from './types';
import {
  BtnClose,
  LayoutDropdownClose,
  WrapperDropDown,
} from './ChangeStates.styled';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      fontFamily: "'Nunito Sans', sans-serif",
      background: '#1A2732',
      padding: '12px 24px',
      width: '350px',
      height: '40px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '400',
      zIndex: '1',
    },
  },
});

export const ChangeStates: FC<PropTypesChangeStates> = ({
  open,
  setOpen,
  handleChangeStates,
  count = 0,
}) => {
  const classes = useStyles();
  const {t} = useTranslation();

  const handleOpen = (): void => {
    setOpen && setOpen(false);
  };

  return (
    <div data-testid="change-states">
      <Snackbar
        className={classes.root}
        open={open}
        autoHideDuration={6000}
        message={`${count} ${t('orders.changestates.qty-selected')}${
          count > 1 ? 's' : ''
        }`}
        sx={{bottom: {xs: 200, sm: 150}, left: {xs: 200, sm: 630}}}
        action={
          <LayoutDropdownClose>
            <WrapperDropDown>
              <SpecialSelect
                onChange={handleChangeStates}
                defaultText={t('orders.changestates.initial-state-dropdown')}
                options={optionsChangeState}
              />
            </WrapperDropDown>
            <BtnClose onClick={handleOpen}>×</BtnClose>
          </LayoutDropdownClose>
        }
      />
    </div>
  );
};
