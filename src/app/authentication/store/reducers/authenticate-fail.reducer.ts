import { AuthenticateFailAction } from "../actions/authenticate-fail.action";
import { AuthenticationState } from "../authentication.state";

export function authenticateFailReducer(state: AuthenticationState, action: AuthenticateFailAction): AuthenticationState {
  return {
    ...state,
    user: null,
    error: action.payload.error,
    loading: false
  } as AuthenticationState;
}
