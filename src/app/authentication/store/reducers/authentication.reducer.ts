import { initial } from "underscore";
import { AnyAuthenticationAction, AuthenticationAction, isAuthenticationAction } from "../actions/authentication.actions";
import { SIGNIN, SigninAction } from "../actions/signin.action";
import { SIGNOUT, SignoutAction } from "../actions/signout.action";
import { AuthenticationState } from "../authentication.state";
import { signinReducer } from "./signin.reducer";
import { signoutReducer } from "./signout.reducer";

const initialAuthenticationState: AuthenticationState = {
  user: null
};

function authenticationReducer(state: AuthenticationState, action: AuthenticationAction): AuthenticationState {
  switch (action.type) {
    case SIGNIN:
      return signinReducer(state, <SigninAction>action);
    case SIGNOUT:
      return signoutReducer(state, <SignoutAction>action);
  }

  throw new Error('Unhandled AuthenticationAction');
}

export function authenticationMasterReducer(state: AuthenticationState = initialAuthenticationState, action: AnyAuthenticationAction): AuthenticationState {
  if (isAuthenticationAction(action)) {
    return authenticationReducer(state, <AuthenticationAction>action);
  }

  return state; // might happen during initialization, triggered by ngrx.
}
