import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'c-shopping-list',
  templateUrl: './c-shopping-list.component.html',
  styleUrls: ['./c-shopping-list.component.scss']
})
export class CShoppingListComponent implements OnInit {

  constructor(public shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {

  }

}
