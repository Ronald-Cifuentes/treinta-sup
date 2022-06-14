import {FC} from 'react';
import {Popover, MenuItem} from '@mui/material';
import {PropTypesButtonMenu} from './types';

const ButtonMenu: FC<PropTypesButtonMenu> = ({
  optionsMenu = [],
  anchorEl,
  setAnchorEl = () => {},
}) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = menuItem => {
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
                    onClick={() => handleMenuItemClick(el.value)}>
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

export default ButtonMenu;
