import { Ingredient } from "src/app/shared/models/ingredient.model";
import * as _ from "underscore";
import { AddIngredientAction, ADD_INGREDIENT } from "../actions/add-ingredient.action";
import { AddIngredientsAction, ADD_INGREDIENTS } from "../actions/add-ingredients.action";
import { DeleteIngredientAction, DELETE_INGREDIENT } from "../actions/delete-ingredient.action";
import { ShoppingListAction } from "../actions/shopping-list.actions";
import { UpdateIngredientAction, UPDATE_INGREDIENT } from "../actions/update-ingredient.action";
import { ShoppingListState } from "../shopping-list.state";
import { addIngredientReducer } from "./add-ingredient.reducer";
import { addIngredientsReducer } from "./add-ingredients.reducer";
import { deleteIngredientReducer } from "./delete-ingredient.reducer";
import { updateIngredientReducer } from "./update-ingredient.reducer";

const initialState: ShoppingListState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ] as Ingredient[]
};

export function shoppingListReducer(state = initialState, action: ShoppingListAction): ShoppingListState {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredientReducer(state, <AddIngredientAction>action);
    case ADD_INGREDIENTS:
      return addIngredientsReducer(state, <AddIngredientsAction>action);
    case UPDATE_INGREDIENT:
      return updateIngredientReducer(state, <UpdateIngredientAction>action);
    case DELETE_INGREDIENT:
      return deleteIngredientReducer(state, <DeleteIngredientAction>action);
    default: // '@ngrx/store/init'
      return state;
  }
}
