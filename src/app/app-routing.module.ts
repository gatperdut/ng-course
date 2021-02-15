import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRecipesComponent } from './c-recipes/c-recipes.component';
import { CShoppingListComponent } from './c-shopping-list/c-shopping-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: CRecipesComponent
  },
  {
    path: 'shopping-list',
    component: CShoppingListComponent
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
