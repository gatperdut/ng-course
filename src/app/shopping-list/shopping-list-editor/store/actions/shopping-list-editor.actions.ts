import { AnyShoppingListAction } from "src/app/shopping-list/store/actions/shopping-list.actions";
import { CancelIngredientEditionAction } from "./cancel-ingredient-edition.action";
import { StartIngredientEditionAction } from "./start-ingredient-edition.action";

const _shoppingListEditorActions = [
  StartIngredientEditionAction,
  CancelIngredientEditionAction
];

const _shoppingListEditorActionPrototypes = [
  StartIngredientEditionAction.prototype,
  CancelIngredientEditionAction.prototype
] as const;

export function isShoppingListEditorAction(action: AnyShoppingListAction): action is ShoppingListEditorAction {
  return _shoppingListEditorActions.some(clazz => action instanceof clazz);
}

export type ShoppingListEditorAction = typeof _shoppingListEditorActionPrototypes[number];
