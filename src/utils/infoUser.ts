import jwt_decode from 'jwt-decode';
import {TokenType} from './types';

export const getUser = (): TokenType | null => {
  const strAccessToken = localStorage.getItem('accessToken');
  let User: TokenType | null = null;
  if (strAccessToken) {
    const accessToken: string = JSON.stringify(strAccessToken);
    User = accessToken ? jwt_decode(accessToken) : null;
  }
  return User;
};
