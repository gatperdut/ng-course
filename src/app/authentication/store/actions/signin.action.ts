import { Action } from '@ngrx/store';

export const SIGNIN: string = 'SIGNIN';

export type SigninActionPayload = {

  email: string;

  id: string;

  token: string;

  tokenExpirationDate: Date;

};

export class SigninAction implements Action {

  readonly type: string = SIGNIN;

  constructor(
    public payload?: SigninActionPayload
  ) {

  }

}
