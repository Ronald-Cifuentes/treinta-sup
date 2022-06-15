export interface FireBaseType {
  identities: object;
  sign_in_provider: string;
}

export interface TokenType {
  aud: string;
  auth_time: number;
  email: string;
  email_verified: true;
  exp: number;
  firebase: FireBaseType;
  iat: number;
  iss: string;
  name: string;
  picture: string;
  scopes: Array<string>;
  sub: string;
  user_id: string;
}
