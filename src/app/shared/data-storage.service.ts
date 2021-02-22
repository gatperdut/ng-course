import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
import * as _ from "underscore";
import { AuthenticationService } from "../authentication/services/authentication.service";
import { RecipeData } from "../recipes/models/recipe-data.interface";
import { Recipe } from "../recipes/models/recipe.model";
import { RecipesService } from "../recipes/services/recipes.service";
import { IngredientData } from "./ingredient-data.interface";
import { Ingredient } from "./ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private readonly url = 'https://ng-course-9d157-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(
    private httpClient: HttpClient,
    private recipesService: RecipesService,
    private authenticationService: AuthenticationService
  ) {

  }

  public save(): void {
    const recipes = this.recipesService.getRecipes();

    this.httpClient.put<RecipeData[]>(
      this.url + 'recipes.json',
      recipes
    )
    .subscribe();
  }

  public load(): Observable<RecipeData[]> {
    return this.httpClient.get<RecipeData[]>(
      this.url + 'recipes.json'
    )
    .pipe(
      map(
        (recipesData: RecipeData[]): RecipeData[] => {
          if (!recipesData) {
            return [];
          }

          return recipesData.map(
            (recipeData: RecipeData): RecipeData => {
              return {
                ...recipeData,
                ingredients: (recipeData.ingredients) ? recipeData.ingredients : []
              };
            }
          );
        }
      ),
      tap(
        (recipesData: RecipeData[]): void => {
          let recipes: Recipe[] = _.map(
            recipesData,
            (recipeData: RecipeData) => {
              const ingredients: Ingredient[] = [];

              _.each(
                recipeData.ingredients,
                (ingredientData: IngredientData): void => {
                  ingredients.push(
                    new Ingredient(
                      ingredientData.name,
                      ingredientData.amount
                    )
                  );
                }
              );

              return new Recipe(
                recipeData.name,
                recipeData.description,
                recipeData.image,
                ingredients
              );
            }
          );
          this.recipesService.setRecipes(recipes);
        }
      )
    );
  }
}
