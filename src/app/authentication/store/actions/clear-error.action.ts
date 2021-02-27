import { Action } from '@ngrx/store';

export const CLEAR_ERROR: string = '[Authentication] CLEAR_ERROR';

export type ClearErrorActionPayload = {

};

export class ClearErrorAction implements Action {

  readonly type: string = CLEAR_ERROR;

  constructor(
    public payload?: ClearErrorActionPayload
  ) {

  }

}
