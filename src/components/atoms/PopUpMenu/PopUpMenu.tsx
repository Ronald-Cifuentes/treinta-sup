import {FC} from 'react';
import {Popover, MenuItem} from '@mui/material';
import {PropTypesButtonMenu} from './types';

export const PopUpMenu: FC<PropTypesButtonMenu> = ({
  optionsMenu = [],
  anchorEl,
  setAnchorEl = () => {},
  ctrlValue = () => {},
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = menuItem => {
    ctrlValue(menuItem);
    handleClose();
  };

  return (
    <>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        {optionsMenu.map(item => {
          if (item.value == anchorEl?.value) {
            if (item.dropdownList && item.dropdownList.length > 0) {
              return item.dropdownList?.map(el => {
                return (
                  <MenuItem
                    key={`MenuItem-${el.value}`}
                    value={el.value}
                    onClick={() => handleMenuItemClick(el)}>
                    {el.label}
                  </MenuItem>
                );
              });
            }
          }
        })}
      </Popover>
    </>
  );
};
