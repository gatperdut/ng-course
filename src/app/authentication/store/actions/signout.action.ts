import { Action } from '@ngrx/store';

export const SIGNOUT: string = '[Authentication] SIGNOUT';

export type SignoutActionPayload = {

};

export class SignoutAction implements Action {

  readonly type: string = SIGNOUT;

  constructor(
    public payload?: SignoutActionPayload
  ) {

  }

}
