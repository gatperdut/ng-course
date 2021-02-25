import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { AppState } from 'src/app/store/app.state';
import { AddIngredientAction, AddIngredientActionPayload } from '../store/actions/add-ingredient.action';
import { UpdateIngredientAction, UpdateIngredientActionPayload } from '../store/actions/update-ingredient.action';
import { CancelIngredientEditionAction, CancelIngredientEditionActionPayload } from './store/actions/cancel-ingredient-edition.action';
import { ShoppingListState } from '../store/shopping-list.state';

@Component({
  selector: 'shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.scss']
})
export class ShoppingListEditorComponent implements OnInit, OnDestroy {

  @ViewChild('ngForm', { static: false }) private ngForm!: NgForm;

  ingredientSelected!: Subscription;

  editingIndex: number = -1;

  constructor(
    private shoppingListService: ShoppingListService,
    private appState: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.ingredientSelected = this.appState.select('shoppingListState').subscribe(
      (shoppingListState: ShoppingListState) => {
        this.editingIndex = shoppingListState.editor.index;
        if (this.editingIndex >= 0) {
            this.ngForm.setValue(
              {
                name:   shoppingListState.editor.ingredient.name,
                amount: shoppingListState.editor.ingredient.amount
              }
            );
        }
        else {
          this.onClear();
        }
      }
    );
  }

  public onSubmit(): void {
    const value = this.ngForm.value;
    const ingredient: Ingredient = new Ingredient(value.name, value.amount);

    if (this.editingIndex >= 0) {
      const updateIngredientActionPayload: UpdateIngredientActionPayload = {
        index: this.editingIndex,
        ingredient: ingredient
      };

      this.appState.dispatch(new UpdateIngredientAction(updateIngredientActionPayload))
    }
    else {
      const addIngredientActionPayload: AddIngredientActionPayload = {
        ingredient: ingredient
      };

      this.appState.dispatch(new AddIngredientAction(addIngredientActionPayload));
    }

    const cancelIngredientEditionActionPayload: CancelIngredientEditionActionPayload = {};
    this.appState.dispatch(new CancelIngredientEditionAction(cancelIngredientEditionActionPayload))

    this.onClear();
  }

  public onClear(): void {
    if (this.ngForm) {
      this.ngForm.reset();
    }
  }

  public onCancel(): void {
    const cancelIngredientEditionActionPayload: CancelIngredientEditionActionPayload = {

    };

    this.appState.dispatch(new CancelIngredientEditionAction(cancelIngredientEditionActionPayload));
  }

  ngOnDestroy(): void {
    this.onCancel();
    this.ingredientSelected.unsubscribe();
  }

}
