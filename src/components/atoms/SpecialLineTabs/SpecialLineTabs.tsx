import {FC, SyntheticEvent, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "33px",
    "& .MuiTab-root": {
      fontFamily: "'Nunito Sans', sans-serif",
      textTransform: "capitalize",
      fontWeight: "400",
      color: "#67737E"
    },
    "& .Mui-selected": {
      color: "#1A2732",
      padding: "12px",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
      backgroundColor: "#F4F5F6",
      borderRadius: "4px"
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#1A2732",
      height: "4px",
      borderRadius: "4px 4px 0px 0px"
    }
  }
});

export interface ArrayLineTabs {
  key?: string
  label?: string
  value?: string
}

export interface PropTypesLineTabs{
  optionsTabs?: Array<ArrayLineTabs>
  onChange?: (value: React.SetStateAction<number>) => void
}

const LineTabs:FC<PropTypesLineTabs> = ({children, optionsTabs = [], onChange}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    onChange && onChange(newValue)
    setValue(newValue);
  };

  return (
    <Box className={classes.root} sx={{ maxWidth: { xs: 320, sm: 480, lg: 1148, xl: 1360 }}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          sx={{ maxWidth: { xs: 320, sm: 480, lg: 720}}}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {optionsTabs.map((item, ind) =>
            <Tab key={ind} label={item.label} value={ind} />
          )}
        </Tabs>
      </Box>
    </Box>
  );
}

export default LineTabs