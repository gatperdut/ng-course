import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'c-recipes',
  templateUrl: './c-recipes.component.html',
  styleUrls: ['./c-recipes.component.scss']
})
export class CRecipesComponent implements OnInit {

  recipe!: Recipe;

  onRecipeSelected = (recipe: Recipe) => {
    this.recipe = recipe;
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
