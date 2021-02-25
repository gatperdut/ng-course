import { Ingredient } from "src/app/shared/models/ingredient.model";
import * as _ from "underscore";
import { ShoppingListEditorAction } from "../../shopping-list-editor/store/actions/shopping-list-editor.actions";
import { StartIngredientEditionAction } from "../../shopping-list-editor/store/actions/start-ingredient-edition.action";
import { initialShoppingListEditorState, shoppingListEditorReducer } from "../../shopping-list-editor/store/reducers/shopping-list-editor.reducer";
import { AddIngredientAction, ADD_INGREDIENT } from "../actions/add-ingredient.action";
import { AddIngredientsAction, ADD_INGREDIENTS } from "../actions/add-ingredients.action";
import { DeleteIngredientAction, DELETE_INGREDIENT } from "../actions/delete-ingredient.action";
import { AnyShoppingListAction, ShoppingListAction } from "../actions/shopping-list.actions";
import { UpdateIngredientAction, UPDATE_INGREDIENT } from "../actions/update-ingredient.action";
import { ShoppingListState } from "../shopping-list.state";
import { addIngredientReducer } from "./add-ingredient.reducer";
import { addIngredientsReducer } from "./add-ingredients.reducer";
import { deleteIngredientReducer } from "./delete-ingredient.reducer";
import { updateIngredientReducer } from "./update-ingredient.reducer";

const initialShoppingListState: ShoppingListState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ] as Ingredient[],
  editor: initialShoppingListEditorState
};

function isShoppingListAction(action: AnyShoppingListAction): action is ShoppingListAction {
  return [
    AddIngredientAction,
    AddIngredientsAction,
    UpdateIngredientAction,
    DeleteIngredientAction
  ].some(clazz => action instanceof clazz);
}

function isShoppingListEditorAction(action: AnyShoppingListAction): action is ShoppingListEditorAction {
  return [
    StartIngredientEditionAction,
    StartIngredientEditionAction
  ].some(clazz => action instanceof clazz);
}

export function shoppingListMasterReducer(state = initialShoppingListState, action: AnyShoppingListAction): ShoppingListState {
  if (isShoppingListAction(action)) {
    return shoppingListReducer(state, <ShoppingListAction>action);
  }

  if (isShoppingListEditorAction(action)) {
    return shoppingListEditorReducer(state, <ShoppingListEditorAction> action);
  }

  return state; // might happen during initialization, triggered by ngrx.
}

function shoppingListReducer(state: ShoppingListState, action: ShoppingListAction): ShoppingListState {
  switch (action.type) {
    case ADD_INGREDIENT:
      return addIngredientReducer(state, <AddIngredientAction>action);
    case ADD_INGREDIENTS:
      return addIngredientsReducer(state, <AddIngredientsAction>action);
    case UPDATE_INGREDIENT:
      return updateIngredientReducer(state, <UpdateIngredientAction>action);
    case DELETE_INGREDIENT:
      return deleteIngredientReducer(state, <DeleteIngredientAction>action);
  }

  throw new Error('Unhandled ShoppingListAction');
}
