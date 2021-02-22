export interface UserData {

  id: string;

  email: string;

  readonly _token: string;

  readonly _tokenExpirationDate: Date;
}
