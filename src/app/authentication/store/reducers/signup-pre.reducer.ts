import { SignupPreAction } from "../actions/signup-pre.action";
import { AuthenticationState } from "../authentication.state";

export function signupPreReducer(state: AuthenticationState, action: SignupPreAction): AuthenticationState {
  return {
    ...state,
    error: null,
    loading: true
  } as AuthenticationState;
}
