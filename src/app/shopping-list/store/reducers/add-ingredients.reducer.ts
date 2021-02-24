import { Ingredient } from "src/app/shared/models/ingredient.model";
import * as _ from "underscore";
import { AddIngredientsAction } from "../actions/add-ingredients.action";
import { ShoppingListState } from "../shopping-list.state";

function mergeIngredients(stateIngredients: Ingredient[], ingredients: Ingredient[]): Ingredient[] {
  let result: Ingredient[] = _.map(
    stateIngredients,
    (ingredient: Ingredient): Ingredient => ingredient.clone()
  );

  _.each(
    ingredients,
    function(ingredient) {
      let previousIngredient = _.findWhere(result, { name: ingredient.name });

      if (previousIngredient) {
        previousIngredient.addAmount(ingredient.amount);
      }
      else {
        result.push(ingredient.clone());
      }
    }
  );

  return result;
}

export function addIngredientsReducer(state: ShoppingListState, action: AddIngredientsAction): ShoppingListState {
  let ingredients: Ingredient[] = mergeIngredients(state.ingredients, (<AddIngredientsAction>action).payload);

  return {
    ...state,
    ingredients: ingredients
  };
}
