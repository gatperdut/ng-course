import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CAuthenticationComponent } from './c-authentication/c-authentication.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'authentication',
    component: CAuthenticationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
