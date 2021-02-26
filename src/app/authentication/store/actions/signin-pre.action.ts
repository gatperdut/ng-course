import { Action } from '@ngrx/store';

export const SIGNIN_PRE: string = '[Authentication] SIGNIN_PRE';

export type SigninPreActionPayload = {

  email: string;

  password: string;

};

export class SigninPreAction implements Action {

  readonly type: string = SIGNIN_PRE;

  constructor(
    public payload?: SigninPreActionPayload
  ) {

  }

}
