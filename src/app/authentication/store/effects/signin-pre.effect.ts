import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationResponseData } from '../../models/authentication-response-data.interface';
import { AuthenticateFailAction, AuthenticateFailActionPayload } from '../actions/authenticate-fail.action';
import { SigninPreAction, SIGNIN_PRE } from '../actions/signin-pre.action';
import { AuthenticateAction } from '../actions/authenticate.action';
import { handleAuthenticate, handleAuthenticateFail } from './authentication-effects.helper';

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
          map(handleAuthenticate),
          catchError(handleAuthenticateFail)
        );
      }
    )
  );

}
