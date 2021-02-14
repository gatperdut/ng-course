import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'c-recipes',
  templateUrl: './c-recipes.component.html',
  styleUrls: ['./c-recipes.component.scss']
})
export class CRecipesComponent implements OnInit {

  constructor(public recipesService: RecipesService) {

  }

  ngOnInit(): void {

  }

}
