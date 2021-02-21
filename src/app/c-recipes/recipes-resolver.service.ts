import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeData } from "./recipe-data.interface";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<RecipeData[]> {

  constructor(private dataStorageService: DataStorageService, private recipesService: RecipesService) {

  }

  resolve(activateRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<RecipeData[]> | Observable<RecipeData[]> | RecipeData[] {
    let recipes: Recipe[] = this.recipesService.getRecipes();

    if (!recipes.length) {
      return this.dataStorageService.load();
    }
    else {
      return recipes;
    }
  }

}
