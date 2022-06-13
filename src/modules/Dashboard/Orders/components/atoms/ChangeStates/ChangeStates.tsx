import {FC, useState} from 'react';
import {Snackbar} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {
  Dropdown,
  Popup,
  TreintaDropdownOptions,
  TreintaDropdownType,
} from '@30sas/web-ui-kit-core';
import {optionsChangeState} from './ChangeStates.mock';
import {PropTypesChangeStates} from './types';
import {
  BtnClose,
  LayoutDropdownClose,
  SpecialSelect,
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

  const handleOpen = (): void => {
    setOpen && setOpen(false);
  };

  return (
    <Snackbar
      data-testid="change-states"
      className={classes.root}
      open={open}
      autoHideDuration={6000}
      message={`${count} Seleccionados`}
      sx={{bottom: {xs: 200, sm: 150}, left: {xs: 200, sm: 630}}}
      action={
        <LayoutDropdownClose>
          <WrapperDropDown>
            {/* <Dropdown
              AlingMenu="right"
              dropdownOptions={optionsChangeState}
              elementId="test"
              errorText="Error text"
              placeholder={optionsChangeState[0].label}
              defaultValue={optionsChangeState[0].label}
              typeRenderItem={TreintaDropdownType['OnlyLetter']}
              onChange={handleChangeStates}
            /> */}
            <SpecialSelect onChange={handleChangeStates}>
              <option value="" disabled defaultChecked>
                Cambiar estado
              </option>
              {optionsChangeState.map(item => (
                <option value={item.value}>{item.label}</option>
              ))}
            </SpecialSelect>
          </WrapperDropDown>
          <BtnClose onClick={handleOpen}>×</BtnClose>
        </LayoutDropdownClose>
      }
    />
  );
};
