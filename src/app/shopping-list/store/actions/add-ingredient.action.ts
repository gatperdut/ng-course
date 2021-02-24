import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const ADD_INGREDIENT: string = 'ADD_INGREDIENT';

export class AddIngredientAction implements Action {

  readonly type: string = ADD_INGREDIENT;

  constructor(
    public payload?: Ingredient
  ) {

  }

}
