import { Component, OnInit } from "@angular/core";

import { Recipe } from '../recipes.model'

@Component({
  selector: 'c-recipes-list',
  templateUrl: './c-recipes-list.component.html',
  styleUrls: ['./c-recipes-list.component.scss']
})
export class CRecipesListComponent implements OnInit {

  readonly recipes: Recipe[] = [
    new Recipe('Schnitzel', 'This thing is fucking delicious', 'https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg'),
    new Recipe('Schnitzel', 'This thing is fucking delicious', 'https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg'),
    new Recipe('Schnitzel', 'This thing is fucking delicious', 'https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg')
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
