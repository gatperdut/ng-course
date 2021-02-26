import { Action } from '@ngrx/store';

export const AUTHENTICATE: string = '[Authentication] AUTHENTICATE';

export type AuthenticateActionPayload = {

  email: string;

  id: string;

  token: string;

  tokenExpirationDate: Date;

};

export class AuthenticateAction implements Action {

  readonly type: string = AUTHENTICATE;

  constructor(
    public payload?: AuthenticateActionPayload
  ) {

  }

}
