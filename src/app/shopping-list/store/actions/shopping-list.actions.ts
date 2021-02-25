import { ShoppingListEditorAction } from "../../shopping-list-editor/store/actions/shopping-list-editor.actions";
import { AddIngredientAction } from "./add-ingredient.action";
import { AddIngredientsAction } from "./add-ingredients.action";
import { DeleteIngredientAction } from "./delete-ingredient.action";
import { UpdateIngredientAction } from "./update-ingredient.action";

const _ShoppingListAction = [
  AddIngredientAction.prototype,
  AddIngredientsAction.prototype,
  UpdateIngredientAction.prototype,
  DeleteIngredientAction.prototype
] as const;

export type ShoppingListAction = typeof _ShoppingListAction[number];

export type AnyShoppingListAction =
  ShoppingListAction       |
  ShoppingListEditorAction
;
