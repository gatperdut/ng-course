import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'c-shopping-list-editor',
  templateUrl: './c-shopping-list-editor.component.html',
  styleUrls: ['./c-shopping-list-editor.component.scss']
})
export class CShoppingListEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('nameInput') nameInput!: ElementRef;

  @ViewChild('amountInput') amountInput!: ElementRef;

  constructor(public shoppingListService: ShoppingListService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.onClear();
  }

  onAdd() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;

    const ingredient = new Ingredient(name, amount);

    this.shoppingListService.addIngredient(ingredient);

    this.onClear();
  }

  onDelete() {

  }

  onClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = 1;
  }

}
