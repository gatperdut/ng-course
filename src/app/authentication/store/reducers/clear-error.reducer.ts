import { AuthenticateFailAction } from "../actions/authenticate-fail.action";
import { ClearErrorAction } from "../actions/clear-error.action";
import { AuthenticationState } from "../authentication.state";

export function clearErrorReducer(state: AuthenticationState, action: ClearErrorAction): AuthenticationState {
  return {
    ...state,
    error: null
  } as AuthenticationState;
}
