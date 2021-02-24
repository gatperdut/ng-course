import { Action } from '@ngrx/store';

export const DELETE_INGREDIENT: string = 'DELETE_INGREDIENT';

export type DeleteIngredientActionData = {

  index: number;

}

export class DeleteIngredientAction implements Action {

  readonly type: string = DELETE_INGREDIENT;

  constructor(
      public payload: DeleteIngredientActionData
    ) {

  }

}
