import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CHeaderComponent } from './c-header/c-header.component';
import { CShoppingListComponent } from './c-shopping-list/c-shopping-list.component';
import { CShoppingListEditorComponent } from './c-shopping-list/c-shopping-list-editor/c-shopping-list-editor.component';
import { CDropdownDirective } from './reference/dropdown.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CHighlightDirective } from './reference/c-highlight.directive';
import { CAuthenticationComponent } from './c-authentication/c-authentication.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthenticationInterceptorService } from './c-authentication/authentication-interceptor.service';
import { CAlertComponent } from './shared/c-alert/c-alert.component';
import { CPlaceholderDirective } from './shared/c-placeholder/c-placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    CHeaderComponent,
    CShoppingListComponent,
    CShoppingListEditorComponent,
    CDropdownDirective,
    CHighlightDirective,
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
    RecipesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
