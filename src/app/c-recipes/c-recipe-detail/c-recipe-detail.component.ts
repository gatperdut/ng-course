import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/c-shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'c-recipe-detail',
  templateUrl: './c-recipe-detail.component.html',
  styleUrls: ['./c-recipe-detail.component.scss']
})
export class CRecipeDetailComponent implements OnInit {

  constructor(public recipesService: RecipesService, public shoppingListService: ShoppingListService) {

  }

  ngOnInit() {

  }

}
