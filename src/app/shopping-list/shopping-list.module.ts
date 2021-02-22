import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShoppingListEditorComponent } from "./shopping-list-editor/shopping-list-editor.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {

}
