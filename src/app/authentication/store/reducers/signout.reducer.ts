import { SignoutAction } from "../actions/signout.action";
import { AuthenticationState } from "../authentication.state";

export function signoutReducer(state: AuthenticationState, action: SignoutAction): AuthenticationState {
  return {
    ...state,
    user: null
  } as AuthenticationState;
}
