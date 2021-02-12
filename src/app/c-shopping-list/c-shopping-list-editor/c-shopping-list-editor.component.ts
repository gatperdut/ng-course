import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'c-shopping-list-editor',
  templateUrl: './c-shopping-list-editor.component.html',
  styleUrls: ['./c-shopping-list-editor.component.scss']
})
export class CShoppingListEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('nameInput') nameInput!: ElementRef;

  @ViewChild('amountInput') amountInput!: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {

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

    this.ingredientAdded.emit(ingredient);
  }

  onDelete() {

  }

  onClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = 1;
  }

}
