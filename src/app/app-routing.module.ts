import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CRecipeDetailComponent } from './c-recipes/c-recipe-detail/c-recipe-detail.component';
import { CRecipeEditComponent } from './c-recipes/c-recipe-edit/c-recipe-edit.component';
import { CRecipeStartComponent } from './c-recipes/c-recipe-start/c-recipe-start.component';
import { CRecipesComponent } from './c-recipes/c-recipes.component';
import { RecipesResolverService } from './c-recipes/recipes-resolver.service';
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
