import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'c-recipe-detail',
  templateUrl: './c-recipe-detail.component.html',
  styleUrls: ['./c-recipe-detail.component.scss']
})
export class CRecipeDetailComponent implements OnInit, OnDestroy {

  public recipe!: Recipe;

  private index!: number;

  private recipeSelected!: Subscription;

  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.recipeSelected = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
        this.recipe = this.recipesService.getRecipe(this.index);
      }
    );
  }

  ngOnDestroy(): void {
    this.recipeSelected.unsubscribe();
  }

  public onAddToShoppingList(): void {
    this.recipesService.addToShoppingList(this.recipe.getIngredients());
  }

  public onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  public onDeleteRecipe(): void {
    this.recipesService.deleteRecipe(this.index);

    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }

}
