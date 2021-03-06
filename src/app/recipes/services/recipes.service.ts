import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredient.model';
import { Store } from '@ngrx/store';

import { Recipe } from '../models/recipe.model';
import { AppState } from 'src/app/store/app.state';
import { AddIngredientsAction, AddIngredientsActionPayload } from 'src/app/shopping-list/store/actions/add-ingredients.action';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesChangedSubject = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe(
    //   'Schnitzel',
    //   'This is a schnitzel',
    //   'https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg',
    //   [
    //     new Ingredient('Meat', 1),
    //     new Ingredient('French Fries', 20)
    //   ]
    // ),
    // new Recipe(
    //   'Arros al forn',
    //   'From Valencia',
    //   'https://www.the-paella.com/wp-content/uploads/2015/05/recette-du-riz-au-four.jpg',
    //   [
    //     new Ingredient('Arros', 250),
    //     new Ingredient('Botifarra', 2),
    //     new Ingredient('Chickpeas', 15)
    //   ]
    // ),
    // new Recipe(
    //   'Lasagna',
    //   'This is a lasagna',
    //   'https://dinnerthendessert.com/wp-content/uploads/2016/04/Ultimate-Meat-Lasagna-3-1.jpg',
    //   [
    //     new Ingredient('Lasagna sheets', 8),
    //     new Ingredient('Tomatoes', 6),
    //     new Ingredient('Cheese', 250)
    //   ]
    // )
  ];

  constructor(
    private appState: Store<AppState>
  ) {

  }

  public get recipesChanged(): Subject<Recipe[]> {
    return this.recipesChangedSubject;
  }

  public setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;

    this.recipesChanged.next(this.getRecipes());
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(index: number): Recipe {
    return this.getRecipes()[index];
  }

  public addRecipe(recipe: Recipe): void {
    this.recipes.unshift(recipe);

    this.recipesChangedSubject.next(this.getRecipes());
  }

  public updateRecipe(index: number, recipe: Recipe): void {
    this.recipes[index] = recipe;

    this.recipesChangedSubject.next(this.getRecipes());
  }

  public deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);

    this.recipesChangedSubject.next(this.getRecipes());
  }

  public addToShoppingList(ingredients: Ingredient[]) {
    let addIngredientsActionPayload: AddIngredientsActionPayload = {
      ingredients: ingredients
    };

    this.appState.dispatch(new AddIngredientsAction(addIngredientsActionPayload));
  }

}
