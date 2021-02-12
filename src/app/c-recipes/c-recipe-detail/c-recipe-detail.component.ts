import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'c-recipe-detail',
  templateUrl: './c-recipe-detail.component.html',
  styleUrls: ['./c-recipe-detail.component.scss']
})
export class CRecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor() {

  }

  ngOnInit() {

  }

}
