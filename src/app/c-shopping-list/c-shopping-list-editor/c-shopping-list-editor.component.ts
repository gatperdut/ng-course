import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'c-shopping-list-editor',
  templateUrl: './c-shopping-list-editor.component.html',
  styleUrls: ['./c-shopping-list-editor.component.scss']
})
export class CShoppingListEditorComponent implements OnInit, OnDestroy {

  @ViewChild('ngForm') private ngForm!: NgForm;

  ingredientSelected!: Subscription;

  editingIndex: number = -1;

  constructor(private shoppingListService: ShoppingListService) {

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
      this.shoppingListService.addIngredients([ingredient]);
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
