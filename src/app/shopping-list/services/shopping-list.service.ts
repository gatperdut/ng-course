import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import * as _ from "underscore";
import { Ingredient } from "../../shared/models/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService implements OnInit {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  private ingredientSelectedSubject: Subject<number> = new Subject<number>();

  constructor() {

  }

  ngOnInit(): void {

  }

  public get ingredientSelected(): Subject<number> {
    return this.ingredientSelectedSubject;
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public getIngredient(index: number): Ingredient {
    return this.getIngredients()[index];
  }

}
