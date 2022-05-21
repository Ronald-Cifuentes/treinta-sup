import {Permissions} from 'config/constants';

export interface UseAuthorization {
  getHasPermission: (requiredPermission: Permissions) => boolean;
  permissionsLoaded: boolean;
}
