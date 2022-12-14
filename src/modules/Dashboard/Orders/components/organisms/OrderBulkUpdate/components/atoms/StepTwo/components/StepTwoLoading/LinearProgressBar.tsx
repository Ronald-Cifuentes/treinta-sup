import {FC} from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {LineasProgressBarProps} from './types';

export const LinearProgressBar: FC<LineasProgressBarProps> = props => {
  const {value, dataTestId = 'linear-progress-bar-test'} = props;
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}} data-testid={dataTestId}>
      <Box sx={{width: '200px'}}>
        <LinearProgress color="success" variant="determinate" {...props} />
      </Box>
      <Box sx={{minWidth: 35, marginRight: 5, marginLeft: 5}}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
};
