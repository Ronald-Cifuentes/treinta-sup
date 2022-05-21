export enum AuthMethods {
  'EMAIL' = 1,
  'PHONE' = 2,
}

export interface UserConfig {
  uid: string;
  accessToken?: string;
  email?: string;
  phoneNumber?: string;
  displayName?: string;
  photoURL?: string;
  authMethod?: AuthMethods;
  showOnBoarding?: boolean;
  id?: string;
}

export interface SignUpPhoneResponse {
  blockedByAttempts: boolean;
  channel: 'sms' | 'call';
  to: string;
  valid: boolean;
  sid: string;
  message?: string;
  remainingAttempts?: number;
}

export interface SignPhoneResponse {
  channel: 'sms' | 'call';
  phone: string;
  token: string;
  valid: boolean;
}
