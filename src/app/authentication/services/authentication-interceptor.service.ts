import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { exhaustMap, map, take } from "rxjs/operators";
import { Store } from '@ngrx/store';
import { User } from "../models/user.model";
import { AppState } from "src/app/store/app.state";
import { AuthenticationState } from "../store/authentication.state";

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(
    private appState: Store<AppState>
  ) {

  }

  public intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    return this.appState.select('authenticationState').pipe(
      take(1),
      map(
        (authenticationState: AuthenticationState) => authenticationState.user
      ),
      exhaustMap(
        (user: User): Observable<HttpEvent<any>> => {
          if (!user) {
            return httpHandler.handle(httpRequest);
          }

          const _httpRequest: HttpRequest<any> = httpRequest.clone(
            {
              params: new HttpParams().set('auth', user.token)
            }
          );

          return httpHandler.handle(_httpRequest);
        }
      )
    )
  }

}
