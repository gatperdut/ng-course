import { Ingredient } from "src/app/shared/models/ingredient.model";
import * as _ from "underscore";
import { ShoppingListEditorState } from "../../shopping-list-editor/store/shopping-list-editor.state";
import { DeleteIngredientAction } from "../actions/delete-ingredient.action";
import { ShoppingListState } from "../shopping-list.state";

export function deleteIngredientReducer(state: ShoppingListState, action: DeleteIngredientAction): ShoppingListState {
  const ingredients = _.filter(
    state.ingredients,
    (ingredient: Ingredient, index): boolean => index !== state.editor.index
  );

  let editor: ShoppingListEditorState;

  if (action.payload.index === state.editor.index) {
    editor = {
      ...state.editor,
      index: -1,
      ingredient: null
    } as ShoppingListEditorState;
  }
  else {
    editor = {
      ...state.editor
    };
  }

  return {
    ...state,
    ingredients: ingredients,
    editor: editor
  } as ShoppingListState;
}
