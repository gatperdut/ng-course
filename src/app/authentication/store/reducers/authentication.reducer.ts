import { initial } from "underscore";
import { AnyAuthenticationAction, AuthenticationAction, isAuthenticationAction } from "../actions/authentication.actions";
import { LOGIN, LoginAction } from "../actions/login.action";
import { AuthenticationState } from "../authentication.state";
import { loginReducer } from "./login.reducer";

const initialAuthenticationState: AuthenticationState = {
  user: null
};

function authenticationReducer(state: AuthenticationState, action: AnyAuthenticationAction): AuthenticationState {
  switch (action.type) {
    case LOGIN:
      return loginReducer(state, <LoginAction>action);
  }

  throw new Error('Unhandled AuthenticationAction');
}

export function authenticationMasterReducer(state: AuthenticationState = initialAuthenticationState, action: AnyAuthenticationAction): AuthenticationState {
  if (isAuthenticationAction(action)) {
    return authenticationReducer(state, <AuthenticationAction>action);
  }

  return state; // might happen during initialization, triggered by ngrx.
}
