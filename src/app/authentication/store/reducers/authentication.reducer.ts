import { AnyAuthenticationAction, AuthenticationAction, isAuthenticationAction } from "../actions/authentication.actions";
import { AuthenticateFailAction, AUTHENTICATE_FAIL } from "../actions/authenticate-fail.action";
import { SigninPreAction, SIGNIN_PRE } from "../actions/signin-pre.action";
import { AUTHENTICATE, AuthenticateAction } from "../actions/authenticate.action";
import { SIGNOUT, SignoutAction } from "../actions/signout.action";
import { AuthenticationState } from "../authentication.state";
import { authenticateFailReducer } from "./authenticate-fail.reducer";
import { signinPreReducer } from "./signin-pre.reducer";
import { authenticateReducer } from "./authenticate.reducer";
import { signoutReducer } from "./signout.reducer";
import { SignupPreAction, SIGNUP_PRE } from "../actions/signup-pre.action";
import { signupPreReducer } from "./signup-pre.reducer";
import { ClearErrorAction, CLEAR_ERROR } from "../actions/clear-error.action";
import { clearErrorReducer } from "./clear-error.reducer";

const initialAuthenticationState: AuthenticationState = {
  user: null,
  error: null,
  loading: false
};

function authenticationReducer(state: AuthenticationState, action: AuthenticationAction): AuthenticationState {
  switch (action.type) {
    case SIGNUP_PRE:
      return signupPreReducer(state, <SignupPreAction>action);
    case SIGNIN_PRE:
      return signinPreReducer(state, <SigninPreAction>action);
    case AUTHENTICATE:
      return authenticateReducer(state, <AuthenticateAction>action);
    case AUTHENTICATE_FAIL:
      return authenticateFailReducer(state, <AuthenticateFailAction>action);
    case SIGNOUT:
      return signoutReducer(state, <SignoutAction>action);
    case CLEAR_ERROR:
      return clearErrorReducer(state, <ClearErrorAction>action);
  }

  throw new Error('Unhandled AuthenticationAction');
}

export function authenticationMasterReducer(state: AuthenticationState = initialAuthenticationState, action: AnyAuthenticationAction): AuthenticationState {
  if (isAuthenticationAction(action)) {
    return authenticationReducer(state, <AuthenticationAction>action);
  }

  return state; // might happen during initialization, triggered by ngrx.
}
