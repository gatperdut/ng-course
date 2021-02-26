import { LoginAction } from "../actions/login.action";
import { AuthenticationState } from "../authentication.state";

export function loginReducer(state: AuthenticationState, action: LoginAction): AuthenticationState {
  return {
    ...state
  } as AuthenticationState;
}
