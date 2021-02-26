import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

export const ADD_INGREDIENTS: string = '[ShoppingList] ADD_INGREDIENTS';

export type AddIngredientsActionPayload = {
  ingredients: Ingredient[];
};

export class AddIngredientsAction implements Action {

  readonly type: string = ADD_INGREDIENTS;

  constructor(
    public payload?: AddIngredientsActionPayload
  ) {

  }

}
