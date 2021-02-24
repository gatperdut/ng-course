import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const UPDATE_INGREDIENT: string = 'UPDATE_INGREDIENT';

export type UpdateIngredientActionData = {

  index: number;

  ingredient: Ingredient;

};

export class UpdateIngredientAction implements Action {

  readonly type: string = UPDATE_INGREDIENT;

  constructor(
    public payload?: UpdateIngredientActionData
  ) {

  }

}
