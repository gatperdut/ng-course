import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(module => module.RecipesModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then(module => module.ShoppingListModule)
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
