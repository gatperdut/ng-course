import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { User } from "../models/user.model";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { AuthenticationState } from "../store/authentication.state";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private router: Router,
    private appState: Store<AppState>
  ) {

  }

  public canActivate(activateRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): (Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree) {
    return this.appState.select('authenticationState').pipe(
      take(1),
      map(
        (authenticationState: AuthenticationState) => authenticationState.user
      ),
      map(
        (user: User): (boolean | UrlTree) => {
          const authenticated: boolean = !!user;

          if (authenticated) {
            return true;
          }

          return this.router.createUrlTree(['/authentication']);
        }
      )
    );
  }

}
