import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CHeaderComponent } from './c-header/c-header.component';
import { CDropdownDirective } from './reference/dropdown.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CHighlightDirective } from './reference/c-highlight.directive';
import { CAuthenticationComponent } from './c-authentication/c-authentication.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthenticationInterceptorService } from './c-authentication/authentication-interceptor.service';
import { CAlertComponent } from './shared/c-alert/c-alert.component';
import { CPlaceholderDirective } from './shared/c-placeholder/c-placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    CHeaderComponent,
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
    RecipesModule,
    ShoppingListModule
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
