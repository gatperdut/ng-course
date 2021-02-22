import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.scss']
})
export class RecipeStartComponent implements OnInit, OnDestroy {

  private recipesChangedSubscription!: Subscription;

  public recipesCount: number = 0;

  constructor(private recipesService: RecipesService) {

  }

  ngOnInit(): void {
    this.recipesCount = this.recipesService.getRecipes().length;

    this.recipesChangedSubscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]): void => {
        this.recipesCount = recipes.length;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
  }

}
