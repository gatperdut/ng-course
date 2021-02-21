import { Ingredient } from "../shared/ingredient.model";

export interface RecipeData {

  readonly name: string;

  readonly description: string;

  readonly image: string;

  readonly ingredients: Ingredient[];

}
