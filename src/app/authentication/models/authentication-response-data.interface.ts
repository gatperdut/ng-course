export interface AuthenticationResponseData {

  idToken: string;

  email: string;

  refreshToken: string;

  expiresIn: string;

  localId: string;

  registered?: boolean; // for signin

}
