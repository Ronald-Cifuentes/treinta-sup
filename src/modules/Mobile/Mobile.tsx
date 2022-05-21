import {FC} from 'react';

import {Events} from 'config/constants';
import {useIsMobile} from 'hooks/useIsMobile';
import {EventProvider} from 'providers/event-provider';

import {AndroidLanding, IOSLanding} from './components/organisms';

export const Mobile: FC = () => {
  const {getOS} = useIsMobile();

  if (getOS() === 'iOS') {
    EventProvider.getInstance().logAnalytics(Events.WEB_APP_IOS_PAGE);
    return <IOSLanding />;
  } else {
    EventProvider.getInstance().logAnalytics(Events.WEB_APP_ANDROID_PAGE);
    return <AndroidLanding />;
  }
};
