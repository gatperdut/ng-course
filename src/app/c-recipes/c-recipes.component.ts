import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'c-recipes',
  templateUrl: './c-recipes.component.html',
  styleUrls: ['./c-recipes.component.scss']
})
export class CRecipesComponent implements OnInit, OnDestroy {

  recipe!: Recipe;

  recipeSelected!: Subscription;

  constructor(private recipesService: RecipesService) {

  }

  ngOnInit(): void {
    this.recipeSelected = this.recipesService.recipeSelectedEmitter().subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipeSelected.unsubscribe();
  }

}
