import {User} from 'services/models';

export interface UserData {
  user: User;
  lastRequest: Date | string;
}
