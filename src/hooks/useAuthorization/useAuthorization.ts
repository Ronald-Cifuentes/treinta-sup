import {useMemo} from 'react';
import {useAuth} from 'context/AuthContext';
import {Permissions, PERMISSIONS} from 'config/constants';

export const useAuthorization = (permission: Permissions): boolean => {
  const {user} = useAuth();

  const getHasPermission = useMemo((): boolean => {
    const condition =
      permission &&
      user?.userTypeId &&
      PERMISSIONS[user.userTypeId as number].includes(permission);
    return condition;
  }, [user?.userTypeId, permission]);

  return getHasPermission;
};
