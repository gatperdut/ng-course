import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Recipe } from "../models/recipe.model";

import { RecipesService } from "../services/recipes.service";

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  recipesChangedSubscription!: Subscription;

  public recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();

    this.recipesChangedSubscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]): void => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
  }

}
