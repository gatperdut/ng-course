import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { AppState } from 'src/app/store/app.state';
import { AddIngredientAction } from '../store/actions/add-ingredient.action';

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
    this.ingredientSelected = this.shoppingListService.ingredientSelected.subscribe(
      (index: number) => {
        this.editingIndex = index;
        if (this.editingIndex >= 0) {
            let ingredient: Ingredient = this.shoppingListService.getIngredient(this.editingIndex);
            this.ngForm.setValue(
              {
                name:   ingredient.name,
                amount: ingredient.amount
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
      this.shoppingListService.updateIngredient(this.editingIndex, ingredient);
    }
    else {
      this.appState.dispatch(new AddIngredientAction(ingredient));
    }

    this.shoppingListService.ingredientSelected.next(-1);
    this.onClear();
  }

  public onClear(): void {
    this.ngForm.reset();
  }

  public onCancel(): void {
    this.shoppingListService.ingredientSelected.next(-1);
  }

  ngOnDestroy(): void {
    this.ingredientSelected.unsubscribe();
  }

}
