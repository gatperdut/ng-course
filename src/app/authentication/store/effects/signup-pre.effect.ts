import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationResponseData } from '../../models/authentication-response-data.interface';
import { AuthenticateFailAction } from '../actions/authenticate-fail.action';
import { AuthenticateAction, AuthenticateActionPayload } from '../actions/authenticate.action';
import { SignupPreAction, SIGNUP_PRE } from '../actions/signup-pre.action';
import { handleAuthenticate, handleAuthenticateFail } from './authentication-effects.helper';

export function signupPreEffect(actions$: Actions, httpClient: HttpClient): Observable<AuthenticateAction | AuthenticateFailAction> {
  return actions$.pipe(
    ofType(
      SIGNUP_PRE
    ),
    switchMap(
      (signupPreAction: SignupPreAction): Observable<AuthenticateAction | AuthenticateFailAction> => {
        let httpParams = new HttpParams().set('key', environment.firebase.apiKey);

        return httpClient.post<AuthenticationResponseData>(
          environment.firebase.signupUrl,
          {
            email: signupPreAction.payload.email,
            password: signupPreAction.payload.password,
            returnSecureToken: true
          },
          {
            params: httpParams
          }
        )
        .pipe(
          map(handleAuthenticate),
          catchError(handleAuthenticateFail)
        )
      }
    )
  );
}
