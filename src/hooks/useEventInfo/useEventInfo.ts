import {useAuth} from 'context/AuthContext';

interface UseEventInfo {
  userType?: number;
}

export const useEventInfo = (): UseEventInfo => {
  const {user} = useAuth();

  return {userType: user?.userTypeId};
};
