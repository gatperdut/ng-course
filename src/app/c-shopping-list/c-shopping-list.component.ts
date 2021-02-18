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

  private ingredientSelectedSubscription!: Subscription;

  public editingIndex: number = -1;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.ingredientSelectedSubscription = this.shoppingListService.ingredientSelected.subscribe(
      (index: number) => {
        this.editingIndex = index;
      }
    );
  }

  onIngredientSelected(index: number): void {
    this.shoppingListService.ingredientSelected.next(index);
  }

  onIngredientDeleted(index: number): void {
    this.shoppingListService.deleteIngredient(index);
  }

  ngOnDestroy() {
    this.ingredientsChangedSubscription.unsubscribe();
    this.ingredientSelectedSubscription.unsubscribe();
  }

}
