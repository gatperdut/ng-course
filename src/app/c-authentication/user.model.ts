export class User {

  constructor(public id: string, public email: string, private _token: string, public _tokenExpirationDate: Date) {

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
