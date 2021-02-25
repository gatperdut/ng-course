import { Ingredient } from "src/app/shared/models/ingredient.model";
import * as _ from "underscore";
import { DeleteIngredientAction } from "../actions/delete-ingredient.action";
import { ShoppingListState } from "../shopping-list.state";

export function deleteIngredientReducer(state: ShoppingListState, action: DeleteIngredientAction): ShoppingListState {
  const ingredients = _.filter(
    state.ingredients,
    (ingredient: Ingredient, index): boolean => index !== action.payload.index
  );

  return {
    ...state,
    ingredients: ingredients
  } as ShoppingListState;
}
