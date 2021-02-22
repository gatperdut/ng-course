import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardService } from './c-authentication/authentication-guard.service';
import { CAuthenticationComponent } from './c-authentication/c-authentication.component';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipes/services/recipes-resolver.service';
import { CShoppingListComponent } from './c-shopping-list/c-shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [
      AuthenticationGuardService
    ],
    children: [
      {
        path: '',
        component: RecipeStartComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [
          RecipesResolverService
        ]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
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
