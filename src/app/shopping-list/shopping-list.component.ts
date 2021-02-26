import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../store/app.state';
import { StartIngredientEditionAction, StartIngredientEditionActionPayload } from './shopping-list-editor/store/actions/start-ingredient-edition.action';
import { DeleteIngredientAction, DeleteIngredientActionPayload } from './store/actions/delete-ingredient.action';
import { ShoppingListState } from './store/shopping-list.state';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  public shoppingListState: Observable<ShoppingListState>;

  private ingredientSelected!: Subscription;

  public editingIndex: number = -1;

  constructor(
    private appState: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.shoppingListState = this.appState.select('shoppingListState')

    this.ingredientSelected = this.appState.select('shoppingListState').subscribe(
      (shoppingListState: ShoppingListState) => {
        this.editingIndex = shoppingListState.editor.index;
      }
    );
  }

  onIngredientSelected(index: number): void {
    const startIngredientEditionActionPayload: StartIngredientEditionActionPayload = {
      index: index
    };

    this.appState.dispatch(new StartIngredientEditionAction(startIngredientEditionActionPayload))
  }

  onIngredientDeleted(index: number): void {
    const deleteIngredientActionPayload: DeleteIngredientActionPayload = {
      index: index
    };

    this.appState.dispatch(new DeleteIngredientAction(deleteIngredientActionPayload));
  }

  ngOnDestroy() {
    this.ingredientSelected.unsubscribe();
  }

}
