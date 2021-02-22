import { Ingredient } from "../../shared/models/ingredient.model";

export interface RecipeData {

  readonly name: string;

  readonly description: string;

  readonly image: string;

  readonly ingredients: Ingredient[];

}
