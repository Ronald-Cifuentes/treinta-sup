import snakecaseKeys from 'snakecase-keys';

import {User, UserReq} from 'services/models';

export const usersSerializer = (user: User): UserReq[] => [
  {...snakecaseKeys(user), is_offline: false},
];
