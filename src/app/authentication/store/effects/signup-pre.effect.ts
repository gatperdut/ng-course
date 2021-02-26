import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SignupPreAction, SIGNUP_PRE } from '../actions/signup-pre.action';

export function signupPreEffect(actions$: Actions): Observable<SignupPreAction> {
  return actions$.pipe(
    ofType(
      SIGNUP_PRE
    )
  );
}
