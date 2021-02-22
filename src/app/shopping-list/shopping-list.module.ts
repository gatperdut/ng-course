import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListEditorComponent } from "./shopping-list-editor/shopping-list-editor.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditorComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule {

}
