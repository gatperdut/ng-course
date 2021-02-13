import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CHeaderComponent } from './c-header/c-header.component';
import { CRecipeDetailComponent } from './c-recipes/c-recipe-detail/c-recipe-detail.component';
import { CRecipeItemComponent } from './c-recipes/c-recipes-list/c-recipe-item/c-recipe-item.component';
import { CRecipesListComponent } from './c-recipes/c-recipes-list/c-recipes-list.component';
import { CShoppingListComponent } from './c-shopping-list/c-shopping-list.component';
import { CShoppingListEditorComponent } from './c-shopping-list/c-shopping-list-editor/c-shopping-list-editor.component';
import { CRecipesComponent } from './c-recipes/c-recipes.component';
import { CDropdownDirective } from './reference/dropdown.directive'
import { FormsModule } from '@angular/forms';
import { CHighlightDirective } from './reference/c-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CHeaderComponent,
    CRecipesListComponent,
    CRecipeItemComponent,
    CRecipeDetailComponent,
    CShoppingListComponent,
    CShoppingListEditorComponent,
    CRecipesComponent,
    CDropdownDirective,
    CHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
