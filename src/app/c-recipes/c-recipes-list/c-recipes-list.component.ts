import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Recipe } from "../recipe.model";

import { RecipesService } from "../recipes.service";

@Component({
  selector: 'c-recipes-list',
  templateUrl: './c-recipes-list.component.html',
  styleUrls: ['./c-recipes-list.component.scss']
})
export class CRecipesListComponent implements OnInit, OnDestroy {

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
