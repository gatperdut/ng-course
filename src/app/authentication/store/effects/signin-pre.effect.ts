import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationResponseData } from '../../models/authentication-response-data.interface';
import { AuthenticateFailAction, AuthenticateFailActionPayload } from '../actions/authenticate-fail.action';
import { SigninPreAction, SIGNIN_PRE } from '../actions/signin-pre.action';
import { AuthenticateAction, AuthenticateActionPayload } from '../actions/authenticate.action';

export function signinPreEffect(actions$: Actions, httpClient: HttpClient): Observable<AuthenticateAction | AuthenticateFailAction> {

  return actions$.pipe(
    ofType(
      SIGNIN_PRE
    ),
    switchMap(
      (action: SigninPreAction): Observable<AuthenticateAction | AuthenticateFailAction> => {
        let httpParams = new HttpParams().set('key', environment.firebase.apiKey);

        return httpClient.post<AuthenticationResponseData>(
          environment.firebase.signinUrl,
          {
            email: action.payload.email,
            password: action.payload.password,
            returnSecureToken: true
          },
          {
            params: httpParams
          }
        )
        .pipe(
          map(
            (authenticationResponseData: AuthenticationResponseData): AuthenticateAction => {
              const expirationDate: Date = new Date(
                new Date().getTime() + parseInt(authenticationResponseData.expiresIn) * 1000
              );
              const signinActionPayload: AuthenticateActionPayload = {
                email: authenticationResponseData.email,
                id: authenticationResponseData.localId,
                token: authenticationResponseData.idToken,
                tokenExpirationDate: expirationDate
              }
              return new AuthenticateAction(signinActionPayload);
            }
          ),
          catchError(
            (httpErrorResponse: HttpErrorResponse): Observable<AuthenticateFailAction> => {
              let error: string = 'An error occurred.';

              if (httpErrorResponse.error && httpErrorResponse.error.error) {
                switch (httpErrorResponse.error.error.message) {
                  case 'INVALID_EMAIL':
                    error = 'The email address is not valid.';
                    break;
                  case 'EMAIL_EXISTS':
                    error = 'This email address is already registered.';
                    break;
                  case 'EMAIL_NOT_FOUND':
                  case 'INVALID_PASSWORD':
                    error = 'Wrong email or password.';
                    break;
                  }
              }

              const signinFailActionPayload: AuthenticateFailActionPayload = {
                error: error
              };
              return of(
                new AuthenticateFailAction(signinFailActionPayload)
              );
            }
          )
        );
      }
    )
  );

}
