import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe!: Recipe;

  @Input() public index!: number;

  constructor() {

  }

  ngOnInit(): void {

  }

}
