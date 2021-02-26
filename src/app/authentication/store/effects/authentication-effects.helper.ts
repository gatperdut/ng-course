import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AuthenticationResponseData } from "../../models/authentication-response-data.interface";
import { AuthenticateFailAction, AuthenticateFailActionPayload } from "../actions/authenticate-fail.action";
import { AuthenticateAction, AuthenticateActionPayload } from "../actions/authenticate.action";

export const handleAuthenticate = (authenticationResponseData: AuthenticationResponseData): AuthenticateAction => {
  const expirationDate: Date = new Date(
    new Date().getTime() + parseInt(authenticationResponseData.expiresIn) * 1000
  );

  const authenticateActionPayload: AuthenticateActionPayload = {
    email: authenticationResponseData.email,
    id: authenticationResponseData.localId,
    token: authenticationResponseData.idToken,
    tokenExpirationDate: expirationDate
  }

  return new AuthenticateAction(authenticateActionPayload);
};

export const handleAuthenticateFail = (httpErrorResponse: HttpErrorResponse): Observable<AuthenticateFailAction> => {
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

  const authenticateFailActionPayload: AuthenticateFailActionPayload = {
    error: error
  };
  return of(
    new AuthenticateFailAction(authenticateFailActionPayload)
  );
};
