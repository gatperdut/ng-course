import { Ingredient } from "../shared/ingredient.model";

export class Recipe {

  public readonly name: string;

  public readonly description: string;

  public readonly image: string;

  public ingredients: Ingredient[];

  constructor(name: string, description: string, image: string, ingredients: Ingredient[]) {
    this.name        = name;
    this.description = description;
    this.image       = image;
    this.ingredients = ingredients;
  }

}
