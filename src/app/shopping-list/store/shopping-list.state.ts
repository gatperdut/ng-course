import { Ingredient } from "src/app/shared/models/ingredient.model";
import { ShoppingListEditorState } from "../shopping-list-editor/store/shopping-list-editor.state";

export type ShoppingListState = {

  ingredients: Ingredient[];

  editor: ShoppingListEditorState;

}
