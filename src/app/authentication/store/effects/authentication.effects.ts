import { Actions } from '@ngrx/effects';
import { Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signinPreEffect } from './signin-pre.effect';
import { redirect } from './redirect.effect';
import { Router } from '@angular/router';
import { AuthenticateFailAction } from '../actions/authenticate-fail.action';
import { AuthenticateAction } from '../actions/authenticate.action';
import { Observable } from 'rxjs';
import { signupPreEffect } from './signup-pre.effect';

@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  @Effect()
  signinPre: Observable<AuthenticateAction | AuthenticateFailAction> = signinPreEffect(this.actions$, this.httpClient);

  @Effect()
  signupPre: Observable<AuthenticateAction | AuthenticateFailAction> = signupPreEffect(this.actions$, this.httpClient);

  @Effect({
    dispatch: false
  })
  authenticate: Observable<AuthenticateAction> = redirect(this.actions$, this.router);

}
