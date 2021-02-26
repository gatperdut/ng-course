import { ShoppingListEditorAction } from "../../shopping-list-editor/store/actions/shopping-list-editor.actions";
import { AddIngredientAction } from "./add-ingredient.action";
import { AddIngredientsAction } from "./add-ingredients.action";
import { DeleteIngredientAction } from "./delete-ingredient.action";
import { UpdateIngredientAction } from "./update-ingredient.action";

const _shoppingListActions = [
  AddIngredientAction,
  AddIngredientsAction,
  UpdateIngredientAction,
  DeleteIngredientAction
];

const _shoppingListActionPrototypes = [
  AddIngredientAction.prototype,
  AddIngredientsAction.prototype,
  UpdateIngredientAction.prototype,
  DeleteIngredientAction.prototype
] as const;

export type ShoppingListAction = typeof _shoppingListActionPrototypes[number];

export type AnyShoppingListAction =
  ShoppingListAction       |
  ShoppingListEditorAction
;

export function isShoppingListAction(action: AnyShoppingListAction): action is ShoppingListAction {
  return _shoppingListActions.some(clazz => action instanceof clazz);
}


