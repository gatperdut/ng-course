import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredient } from '../shared/models/ingredient.model';
import { AppState } from '../store/app.state';
import { ShoppingListService } from './services/shopping-list.service';
import { DeleteIngredientAction, DeleteIngredientActionData } from './store/actions/delete-ingredient.action';
import { ShoppingListState } from './store/shopping-list.state';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public shoppingListState: Observable<ShoppingListState>;

  private ingredientSelectedSubscription!: Subscription;

  public editingIndex: number = -1;

  constructor(
    private shoppingListService: ShoppingListService,
    private appState: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.shoppingListState = this.appState.select('shoppingListState')

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
    let deleteIngredientActionData: DeleteIngredientActionData = {
      index: index
    };

    this.appState.dispatch(new DeleteIngredientAction(deleteIngredientActionData));
  }

  ngOnDestroy() {
    this.ingredientSelectedSubscription.unsubscribe();
  }

}
