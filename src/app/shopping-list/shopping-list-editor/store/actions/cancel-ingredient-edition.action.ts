import { Action } from '@ngrx/store';

export const CANCEL_INGREDIENT_EDITION: string = 'CANCEL_INGREDIENT_EDITION';

export type CancelIngredientEditionActionPayload = {

};

export class CancelIngredientEditionAction implements Action {

  readonly type: string = CANCEL_INGREDIENT_EDITION;

  constructor(
    public payload?: CancelIngredientEditionActionPayload
  ) {

  }

}
