export interface UserReq {
  uid: string;
  first_name: string;
  document?: string;
  email?: string;
  phone?: string;
  is_offline?: boolean;
  country_id: number;
}

export interface User {
  id?: string;
  uid: string;
  firstName: string;
  lastName?: string;
  document?: string;
  email?: string;
  phone?: string;
  isOffline?: boolean;
  userTypeId?: number;
  firstTimes?: string;
  countryId: number;
}
