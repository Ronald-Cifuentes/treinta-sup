import {FC, SyntheticEvent, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {makeStyles} from '@mui/styles';
import ButtonMenu from '../ButtonMenu';
import {optionsButtonMenu} from './SpecialLineTabs.mock';

const useStyles = makeStyles({
  root: {
    marginTop: '33px',
    '& .MuiTab-root': {
      fontFamily: "'Nunito Sans', sans-serif",
      textTransform: 'capitalize',
      fontWeight: '400',
      color: '#67737E',
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
  },
});

export interface ArrayLineTabs {
  key?: string;
  label?: string;
  value?: string;
}

export interface PropTypesLineTabs {
  optionsTabs?: Array<ArrayLineTabs>;
  onChange?: (value: React.SetStateAction<number>) => void;
}

const LineTabs: FC<PropTypesLineTabs> = ({optionsTabs = [], onChange}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [buttonMenu, setButtonMenu] = useState<string | null>();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    onChange && onChange(newValue);
    setValue(newValue);
  };

  const handleButtonMenu = (
    value: React.SetStateAction<string | null | undefined>,
  ) => {
    setButtonMenu(value);
    console.log(value);
  };

  return (
    <Box
      className={classes.root}
      sx={{maxWidth: {xs: 320, sm: 480, lg: 1148, xl: 1360}}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          sx={{maxWidth: {xs: 320, sm: 480, lg: 920}}}
          value={value}
          onChange={handleChange}>
          {optionsTabs.map((item, ind) => (
            <Tab key={ind} label={item.label} value={ind} />
          ))}
          <ButtonMenu
            items={optionsButtonMenu}
            onChange={handleButtonMenu}
            value={buttonMenu}
          />
        </Tabs>
        {buttonMenu}
      </Box>
    </Box>
  );
};

export default LineTabs;
