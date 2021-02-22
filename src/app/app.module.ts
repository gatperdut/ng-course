import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CHeaderComponent } from './c-header/c-header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { CShoppingListComponent } from './c-shopping-list/c-shopping-list.component';
import { CShoppingListEditorComponent } from './c-shopping-list/c-shopping-list-editor/c-shopping-list-editor.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CDropdownDirective } from './reference/dropdown.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CHighlightDirective } from './reference/c-highlight.directive';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { CAuthenticationComponent } from './c-authentication/c-authentication.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthenticationInterceptorService } from './c-authentication/authentication-interceptor.service';
import { CAlertComponent } from './shared/c-alert/c-alert.component';
import { CPlaceholderDirective } from './shared/c-placeholder/c-placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    CHeaderComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    CShoppingListComponent,
    CShoppingListEditorComponent,
    RecipesComponent,
    CDropdownDirective,
    CHighlightDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    CAuthenticationComponent,
    LoadingSpinnerComponent,
    CAlertComponent,
    CPlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
