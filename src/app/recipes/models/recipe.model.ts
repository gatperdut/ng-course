import { Ingredient } from "../../shared/models/ingredient.model";
import { RecipeData } from "./recipe-data.interface";

export class Recipe implements RecipeData {

  public readonly name: string;

  public readonly description: string;

  public readonly image: string;

  public readonly ingredients: Ingredient[];

  constructor(name: string, description: string, image: string, ingredients: Ingredient[]) {
    this.name        = name;
    this.description = description;
    this.image       = image;
    this.ingredients = ingredients;
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

}
