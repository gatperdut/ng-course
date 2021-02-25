import { ShoppingListState } from "src/app/shopping-list/store/shopping-list.state";
import { CancelIngredientEditionAction } from "../actions/cancel-ingredient-edition.action";

export function cancelIngredientEditionReducer(state: ShoppingListState, action: CancelIngredientEditionAction): ShoppingListState {
  return {
    ...state,
    editor: {
      ...state.editor,
      index: -1,
      ingredient: null
    }
  } as ShoppingListState;
}
