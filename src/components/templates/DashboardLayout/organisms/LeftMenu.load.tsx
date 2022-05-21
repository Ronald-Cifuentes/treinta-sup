import {FC} from 'react';

import {LeftMenu} from './LeftMenu';

interface ILeftMenuLoadProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

export const LeftMenuLoad: FC<ILeftMenuLoadProps> = props => {
  return <LeftMenu {...props} />;
};
