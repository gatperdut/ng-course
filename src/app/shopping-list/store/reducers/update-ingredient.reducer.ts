import { Ingredient } from "src/app/shared/models/ingredient.model";
import * as _ from "underscore";
import { UpdateIngredientAction } from "../actions/update-ingredient.action";
import { ShoppingListState } from "../shopping-list.state";

export function updateIngredientReducer(state: ShoppingListState, action: UpdateIngredientAction): ShoppingListState {

  const ingredients: Ingredient[] = _.map(
    state.ingredients,
    (ingredient: Ingredient): Ingredient => ingredient.clone()
  );

  ingredients[state.editor.index] = action.payload.ingredient;

  return {
    ...state,
    ingredients: ingredients,
    editor: {
      ...state.editor,
      index: -1,
      ingredient: null
    }
  } as ShoppingListState;

}
