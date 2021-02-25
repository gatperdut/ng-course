import { ShoppingListState } from "src/app/shopping-list/store/shopping-list.state";
import * as _ from "underscore";
import { CancelIngredientEditionAction, CANCEL_INGREDIENT_EDITION } from "../actions/cancel-ingredient-edition.action";
import { ShoppingListEditorAction } from "../actions/shopping-list-editor.actions";
import { StartIngredientEditionAction, START_INGREDIENT_EDITION } from "../actions/start-ingredient-edition.action";
import { ShoppingListEditorState } from "../shopping-list-editor.state";
import { cancelIngredientEditionReducer } from "./cancel-ingredient-edition.reducer";
import { startIngredientEditionReducer } from "./start-ingredient-edition.reducer";

export const initialShoppingListEditorState: ShoppingListEditorState = {
  index: -1,
  ingredient: null
};

export function shoppingListEditorReducer(state: ShoppingListState, action: ShoppingListEditorAction): ShoppingListState {
  switch (action.type) {
    case START_INGREDIENT_EDITION:
      return startIngredientEditionReducer(state, <StartIngredientEditionAction>action);
    case CANCEL_INGREDIENT_EDITION:
      return cancelIngredientEditionReducer(state, <CancelIngredientEditionAction>action);
  }

  throw new Error('Unhandled ShoppingListEditorAction');
}
