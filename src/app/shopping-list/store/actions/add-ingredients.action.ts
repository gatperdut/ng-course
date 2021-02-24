import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const ADD_INGREDIENTS: string = 'ADD_INGREDIENTS';

export class AddIngredientsAction implements Action {

  readonly type: string = ADD_INGREDIENTS;

  constructor(
    public payload?: Ingredient[]
  ) {

  }

}
