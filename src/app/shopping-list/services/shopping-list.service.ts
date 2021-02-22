import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import * as _ from "underscore";
import { Ingredient } from "../../shared/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService implements OnInit {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  private ingredientsChangedSubject: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  private ingredientSelectedSubject: Subject<number> = new Subject<number>();

  constructor() {

  }

  ngOnInit(): void {

  }

  public get ingredientsChanged(): Subject<Ingredient[]> {
    return this.ingredientsChangedSubject;
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

  private addIngredient(ingredient: Ingredient): void {
    let previousIngredient = _.findWhere(this.ingredients, { name: ingredient.name });

    if (previousIngredient) {
      previousIngredient.addAmount(ingredient.amount);
    }
    else {
      this.ingredients.push(ingredient.clone());
    }
  }

  public addIngredients(ingredients: Ingredient[]): void {
    _.each(ingredients, ingredient => this.addIngredient(ingredient));

    this.ingredientsChanged.next(this.getIngredients());
  }

  public updateIngredient(index: number, ingredient: Ingredient): void {
    this.ingredients[index] = ingredient;

    this.ingredientsChanged.next(this.getIngredients());
  }

  public deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);

    this.ingredientsChanged.next(this.getIngredients());
    this.ingredientSelected.next(-1);
  }

}
