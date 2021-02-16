import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'c-shopping-list',
  templateUrl: './c-shopping-list.component.html',
  styleUrls: ['./c-shopping-list.component.scss']
})
export class CShoppingListComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[] = [];

  private ingredientsChangedSubscription!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChangedSubject().subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.ingredientsChangedSubscription.unsubscribe();
  }

}
