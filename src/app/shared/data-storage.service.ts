import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';
import * as _ from "underscore";
import { AuthenticationService } from "../c-authentication/authentication.service";
import { RecipeData } from "../c-recipes/recipe-data.interface";
import { Recipe } from "../c-recipes/recipe.model";
import { RecipesService } from "../c-recipes/recipes.service";

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
              return new Recipe(
                recipeData.name,
                recipeData.description,
                recipeData.image,
                recipeData.ingredients
              );
            }
          );
          this.recipesService.setRecipes(recipes);
        }
      )
    );
  }
}
