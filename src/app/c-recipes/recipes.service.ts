import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

import { Recipe } from "./recipe.model";

@Injectable({ providedIn: 'root' })
export class RecipesService {

  recipes = {
    list: [
      new Recipe(
        'Schnitzel',
        'This is a schnitzel',
        'https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]
      ),
      new Recipe(
        'Arros al forn',
        'From Valencia',
        'https://www.the-paella.com/wp-content/uploads/2015/05/recette-du-riz-au-four.jpg',
        [
          new Ingredient('Arros', 250),
          new Ingredient('Botifarra', 2),
          new Ingredient('Chickpeas', 15)
        ]
      ),
      new Recipe(
        'Lasagna',
        'This is a lasagna',
        'https://dinnerthendessert.com/wp-content/uploads/2016/04/Ultimate-Meat-Lasagna-3-1.jpg',
        [
          new Ingredient('Lasagna leaves', 8),
          new Ingredient('Tomatoes', 6),
          new Ingredient('Cheese', 250)
        ]
      )
    ] as Recipe[],
    current: null as unknown as Recipe
  };

  constructor() {

  }

  select(recipe: Recipe) {
    this.recipes.current = recipe;
  }
}
