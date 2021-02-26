import { UserData } from "./user-data.interface";

export class User implements UserData {

  constructor(
    public id: string,
    public email: string,
    public _token: string,
    public _tokenExpirationDate: Date
  ) {

  }

  private tokenExpired(): boolean {
    return !this._tokenExpirationDate || new Date() > this._tokenExpirationDate;
  }

  get token(): string {
    if (this.tokenExpired()) {
      return null;
    }

    return this._token;
  }

}
