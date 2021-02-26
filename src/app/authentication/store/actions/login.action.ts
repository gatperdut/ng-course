import { Action } from '@ngrx/store';

export const LOGIN: string = 'LOGIN';

export type LoginActionPayload = {

};

export class LoginAction implements Action {

  readonly type: string = LOGIN;

  constructor(
    public payload?: LoginActionPayload
  ) {

  }

}
