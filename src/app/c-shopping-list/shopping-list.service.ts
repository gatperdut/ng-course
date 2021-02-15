import { Injectable, OnInit } from "@angular/core";
import * as _ from "underscore";
import { RecipesService } from "../c-recipes/recipes.service";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  addIngredient(ingredient: Ingredient) {
    let previousIngredient = _.findWhere(this.ingredients, { name: ingredient.name });

    if (previousIngredient) {
      previousIngredient.addAmount(ingredient.amount);
    }
    else {
      this.ingredients.push(ingredient);
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    _.each(ingredients, ingredient => this.addIngredient(ingredient));
  }

}
