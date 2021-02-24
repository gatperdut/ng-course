import { AddIngredientAction } from "./add-ingredient.action";
import { AddIngredientsAction } from "./add-ingredients.action";
import { DeleteIngredientAction } from "./delete-ingredient.action";
import { UpdateIngredientAction } from "./update-ingredient.action";

export type ShoppingListAction =
  AddIngredientAction    |
  AddIngredientsAction   |
  UpdateIngredientAction |
  DeleteIngredientAction
;
