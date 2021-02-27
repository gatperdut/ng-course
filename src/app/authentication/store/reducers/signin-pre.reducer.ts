import { SigninPreAction } from "../actions/signin-pre.action";
import { AuthenticationState } from "../authentication.state";

export function signinPreReducer(state: AuthenticationState, action: SigninPreAction): AuthenticationState {
  return {
    ...state,
    loading: true
  } as AuthenticationState;
}
