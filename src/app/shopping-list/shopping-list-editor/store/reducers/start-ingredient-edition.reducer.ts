import { ShoppingListState } from "src/app/shopping-list/store/shopping-list.state";
import { StartIngredientEditionAction } from "../actions/start-ingredient-edition.action";

export function startIngredientEditionReducer(state: ShoppingListState, action: StartIngredientEditionAction): ShoppingListState {
  return {
    ...state,
    editor: {
      ...state.editor,
      index: action.payload.index,
      ingredient: state.ingredients[action.payload.index].clone()
    }
  } as ShoppingListState;
}
