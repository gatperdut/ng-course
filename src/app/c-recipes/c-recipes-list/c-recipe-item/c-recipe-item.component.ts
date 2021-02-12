import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'c-recipe-item',
  templateUrl: './c-recipe-item.component.html',
  styleUrls: ['./c-recipe-item.component.scss']
})
export class CRecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {

  }

  ngOnInit() {

  }

  onRecipeSelected() {
    this.recipeSelected.emit()
  }

}
