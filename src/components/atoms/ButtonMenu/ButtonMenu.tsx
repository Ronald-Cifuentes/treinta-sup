import {FC, useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface PropTypesButtonMenu {
  items?: Array<{label?: string; value?: string | number}>;
  onChange?: (value: React.SetStateAction<string | null | undefined>) => void;
  value: any;
}

const ButtonMenu: FC<PropTypesButtonMenu> = ({items = [], onChange}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    onChange && onChange(e.currentTarget.textContent);
    setAnchorEl(null);
  };

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button
          style={{
            color: '#1A2732',
            padding: 0,
            margin: 0,
            border: 0,
            background: 'transparent',
          }}
          onClick={handleClick}>
          <KeyboardArrowDownIcon />
        </button>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {items.map(item => (
          <MenuItem key={item.value} onClick={handleClose} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ButtonMenu;
