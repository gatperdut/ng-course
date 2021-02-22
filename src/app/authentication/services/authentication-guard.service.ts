import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthenticationService } from "./authentication.service";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {

  }

  public canActivate(activateRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): (Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree) {
    return this.authenticationService.userChangedSubject.pipe(
      take(1),
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
