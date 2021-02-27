import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTHENTICATE, AuthenticateAction } from '../actions/authenticate.action';
import { SIGNOUT } from '../actions/signout.action';

export function redirect(actions$: Actions, router: Router): Observable<AuthenticateAction> {
  return actions$.pipe(
    ofType(
      AUTHENTICATE,
      SIGNOUT
    ),
    tap(
      (): void => {
        router.navigate(['/']);
      }
    )
  );
}
