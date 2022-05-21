import {FC} from 'react';

import {useDashboard} from 'context/DashboardContext';

export const SharedRightBar: FC = () => {
  const {screens = []} = useDashboard();

  if (!screens.length) {
    return null;
  }

  switch (true) {
    default:
      return null;
  }
};
