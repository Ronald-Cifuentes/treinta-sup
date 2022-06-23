import {FC, SyntheticEvent, useState} from 'react';
import {Box, Tabs, Tab} from '@mui/material';
import {makeStyles} from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {PopUpMenu} from '../PopUpMenu';
import {PropTypesLineTabs} from './types';
import {BtnDropdown} from './SpecialLineTabs.styled';

const useStyles = makeStyles({
  root: {
    marginTop: '33px',
    '& .MuiTab-root': {
      fontFamily: "'Nunito Sans', sans-serif",
      textTransform: 'capitalize',
      fontWeight: '400',
      color: '#67737E',
      minHeight: 0,
    },
    '& .Mui-selected': {
      color: '#1A2732',
      padding: '12px',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
      backgroundColor: '#F4F5F6',
      borderRadius: '4px',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#1A2732',
      height: '4px',
      borderRadius: '4px 4px 0px 0px',
    },
    '& .MuiTab-labelIcon': {
      flexDirection: 'row-reverse',
    },
    '& .MuiTab-iconWrapper': {
      margin: 0,
      padding: 0,
      border: 0,
    },
  },
});

export const SpecialLineTabs: FC<PropTypesLineTabs> = ({
  optionsTabs = [],
  onChange,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    onChange && onChange(newValue);
    setValue(newValue);
  };

  const handleClick = (event): void => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handlePopUpMenu = (itemSelected): void => {
    onChange && onChange(itemSelected.value);
  };

  return (
    <div data-testid="special-line-tabs">
      <Box
        className={classes.root}
        sx={{maxWidth: {xs: 320, sm: 480, lg: 1148, xl: 1360}}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <PopUpMenu
            optionsMenu={optionsTabs}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            ctrlValue={handlePopUpMenu}
          />
          <Tabs
            sx={{maxWidth: {xs: 320, sm: 480, lg: 920}}}
            value={value}
            onChange={handleChange}>
            {optionsTabs.map(item => (
              <Tab
                key={`tab-${item.value}`}
                label={item.label}
                value={parseInt(item.value || '')}
                icon={
                  item?.dropdownList && (
                    <BtnDropdown
                      onClick={handleClick}
                      value={parseInt(item.value || '')}>
                      <KeyboardArrowDownIcon />
                    </BtnDropdown>
                  )
                }
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};
