import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'c-recipe-item',
  templateUrl: './c-recipe-item.component.html',
  styleUrls: ['./c-recipe-item.component.scss']
})
export class CRecipeItemComponent implements OnInit {
  @Input() public recipe!: Recipe;

  @Input() public index!: number;

  constructor() {

  }

  ngOnInit(): void {

  }

}
