import { Action } from '@ngrx/store';

export const SIGNUP_PRE: string = '[Authentication] SIGNUP_PRE';

export type SignupPreActionPayload = {

  email: string;

  password: string;

};

export class SignupPreAction implements Action {

  readonly type: string = SIGNUP_PRE;

  constructor(
    public payload?: SignupPreActionPayload
  ) {

  }

}
