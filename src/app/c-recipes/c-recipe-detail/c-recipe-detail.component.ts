import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'c-recipe-detail',
  templateUrl: './c-recipe-detail.component.html',
  styleUrls: ['./c-recipe-detail.component.scss']
})
export class CRecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe('name', 'description', 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg');;

  constructor() {

  }

  ngOnInit() {

  }

}
