import { AddIngredientAction } from "../actions/add-ingredient.action";
import { ShoppingListState } from "../shopping-list.state";

export function addIngredientReducer(state: ShoppingListState, action: AddIngredientAction): ShoppingListState {
  return {
    ...state,
    ingredients: [...state.ingredients, action.payload.ingredient]
  } as ShoppingListState;
}
