import { Component, OnInit } from "@angular/core";

import { RecipesService } from "../recipes.service";

@Component({
  selector: 'c-recipes-list',
  templateUrl: './c-recipes-list.component.html',
  styleUrls: ['./c-recipes-list.component.scss']
})
export class CRecipesListComponent implements OnInit {

  constructor(public recipesService: RecipesService) {

  }

  ngOnInit() {

  }

}
