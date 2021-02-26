import { Action } from '@ngrx/store';

export const AUTHENTICATE_FAIL: string = '[Authentication] AUTHENTICATE_FAIL';

export type AuthenticateFailActionPayload = {
  error: string;
};

export class AuthenticateFailAction implements Action {

  readonly type: string = AUTHENTICATE_FAIL;

  constructor(
    public payload?: AuthenticateFailActionPayload
  ) {

  }

}
