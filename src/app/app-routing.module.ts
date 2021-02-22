import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardService } from './c-authentication/authentication-guard.service';
import { CAuthenticationComponent } from './c-authentication/c-authentication.component';

import { CRecipeDetailComponent } from './c-recipes/c-recipe-detail/c-recipe-detail.component';
import { CRecipeEditComponent } from './c-recipes/c-recipe-edit/c-recipe-edit.component';
import { CRecipeStartComponent } from './c-recipes/c-recipe-start/c-recipe-start.component';
import { CRecipesComponent } from './c-recipes/c-recipes.component';
import { RecipesResolverService } from './c-recipes/services/recipes-resolver.service';
import { CShoppingListComponent } from './c-shopping-list/c-shopping-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: CRecipesComponent,
    canActivate: [
      AuthenticationGuardService
    ],
    children: [
      {
        path: '',
        component: CRecipeStartComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: CRecipeEditComponent
      },
      {
        path: ':id',
        component: CRecipeDetailComponent,
        resolve: [
          RecipesResolverService
        ]
      },
      {
        path: ':id/edit',
        component: CRecipeEditComponent,
        resolve: [
          RecipesResolverService
        ]
      }
    ]
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
