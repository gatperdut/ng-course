import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'c-recipe-item',
  templateUrl: './c-recipe-item.component.html',
  styleUrls: ['./c-recipe-item.component.scss']
})
export class CRecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(public recipesService: RecipesService) {

  }

  ngOnInit() {

  }

  onRecipeSelected = () => {
    this.recipesService.select(this.recipe);
  }

}
