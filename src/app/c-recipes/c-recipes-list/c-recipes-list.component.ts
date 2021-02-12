import { Component, OnInit } from "@angular/core";

import { Recipe } from '../recipes.model'

@Component({
  selector: 'c-recipes-list',
  templateUrl: './c-recipes-list.component.html',
  styleUrls: ['./c-recipes-list.component.scss']
})
export class CRecipesListComponent implements OnInit {

  readonly recipes: Recipe[] = [
    new Recipe('Schnitzel', 'This is a schnitzel', 'https://www.gutekueche.at/img/rezept/170/460x307_wiener-schnitzel.jpg'),
    new Recipe('Arros al forn', 'From Valencia', 'https://www.the-paella.com/wp-content/uploads/2015/05/recette-du-riz-au-four.jpg'),
    new Recipe('Lasagna', 'This is a lasagna', 'https://dinnerthendessert.com/wp-content/uploads/2016/04/Ultimate-Meat-Lasagna-3-1.jpg')
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
