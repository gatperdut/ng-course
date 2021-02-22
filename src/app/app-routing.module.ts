import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CAuthenticationComponent } from './c-authentication/c-authentication.component';
import { CShoppingListComponent } from './c-shopping-list/c-shopping-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'shopping-list',
    component: CShoppingListComponent
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
