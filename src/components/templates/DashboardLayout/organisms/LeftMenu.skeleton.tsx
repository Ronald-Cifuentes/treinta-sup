import {FC} from 'react';
import {
  Avatar,
  Box,
  DrawerLeft,
  Skeleton,
  Typography,
} from '@30sas/web-ui-kit-core';

export const LeftMenuSkeleton: FC = () => (
  <DrawerLeft>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{margin: 1}}>
        <Skeleton variant="rectangular" width={32} height={32}>
          <Avatar />
        </Skeleton>
      </Box>
      <Box sx={{width: '30%'}}>
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
      </Box>
    </Box>
    <Box sx={{padding: '4px'}}>
      <Skeleton variant="rectangular" width={203} height={143} />
    </Box>

    <Box sx={{padding: '8px', marginTop: '32px'}}>
      <Skeleton variant="text" />
    </Box>
    <Box sx={{padding: '8px'}}>
      <Skeleton variant="text" />
    </Box>
    <Box sx={{padding: '8px'}}>
      <Skeleton variant="text" />
    </Box>
  </DrawerLeft>
);
