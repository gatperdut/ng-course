import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const START_INGREDIENT_EDITION: string = 'START_INGREDIENT_EDITION';

export type StartIngredientEditionActionPayload = {
  index: number;
};

export class StartIngredientEditionAction implements Action {

  readonly type: string = START_INGREDIENT_EDITION;

  constructor(
    public payload?: StartIngredientEditionActionPayload
  ) {

  }

}
