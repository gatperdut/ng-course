import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'c-shopping-list-editor',
  templateUrl: './c-shopping-list-editor.component.html',
  styleUrls: ['./c-shopping-list-editor.component.scss']
})
export class CShoppingListEditorComponent implements OnInit, AfterViewInit {

  ingredient = new Ingredient('', 1);

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.onClear();
  }

  public canAdd(): boolean {
    return this.ingredient.valid();
  }

  public onAdd(): void {
    this.shoppingListService.addIngredients([this.ingredient]);

    this.onClear();
  }

  public onDelete(): void {

  }

  public onClear(): void {
    this.ingredient.name = '';
    this.ingredient.amount = 1;
  }

}
