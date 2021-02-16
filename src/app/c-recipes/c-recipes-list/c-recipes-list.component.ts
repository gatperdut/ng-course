import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

import { RecipesService } from "../recipes.service";

@Component({
  selector: 'c-recipes-list',
  templateUrl: './c-recipes-list.component.html',
  styleUrls: ['./c-recipes-list.component.scss']
})
export class CRecipesListComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

}
