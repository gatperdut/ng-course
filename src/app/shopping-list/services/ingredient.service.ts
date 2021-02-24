import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  public clone(ingredients: Ingredient[]): Ingredient[] {
    return _.map(
      ingredients,
      (ingredient: Ingredient): Ingredient => ingredient.clone()
    );
  }

}
