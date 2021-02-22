import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuardService } from "../c-authentication/authentication-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RecipesResolverService } from "./services/recipes-resolver.service";

const routes: Routes = [
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
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {


}
