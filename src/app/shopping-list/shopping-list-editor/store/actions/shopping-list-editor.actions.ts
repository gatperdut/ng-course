import { CancelIngredientEditionAction } from "./cancel-ingredient-edition.action";
import { StartIngredientEditionAction } from "./start-ingredient-edition.action";

const _ShoppingListEditorAction = [
  StartIngredientEditionAction.prototype,
  CancelIngredientEditionAction.prototype
] as const;

export type ShoppingListEditorAction = typeof _ShoppingListEditorAction[number];
