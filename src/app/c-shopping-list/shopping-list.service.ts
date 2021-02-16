import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import * as _ from "underscore";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService implements OnInit {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  private ingredientsChanged = new Subject<Ingredient[]>();

  constructor() {

  }

  ngOnInit(): void {

  }

  public ingredientsChangedSubject(): Subject<Ingredient[]> {
    return this.ingredientsChanged;
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  private addIngredient(ingredient: Ingredient) {
    let previousIngredient = _.findWhere(this.ingredients, { name: ingredient.name });

    if (previousIngredient) {
      previousIngredient.addAmount(ingredient.amount);
    }
    else {
      this.ingredients.push(ingredient.clone());
    }
  }

  public addIngredients(ingredients: Ingredient[]) {
    _.each(ingredients, ingredient => this.addIngredient(ingredient));

    this.ingredientsChanged.next(this.getIngredients());
  }

}
