import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";
import { User } from "../models/user.model";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) {

  }

  public intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.userChangedSubject.pipe(
      take(1),
      exhaustMap(
        (user: User): Observable<HttpEvent<any>> => {
          if (!user) {
            return httpHandler.handle(httpRequest);
          }

          const _httpRequest = httpRequest.clone(
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
