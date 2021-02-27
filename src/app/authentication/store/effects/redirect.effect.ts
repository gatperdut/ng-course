import { Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AUTHENTICATE, AuthenticateAction } from '../actions/authenticate.action';

export function redirect(actions$: Actions, router: Router): Observable<AuthenticateAction> {
  return actions$.pipe(
    ofType(
      AUTHENTICATE
    ),
    tap(
      (): void => {
        router.navigate(['/']);
      }
    )
  );
}
