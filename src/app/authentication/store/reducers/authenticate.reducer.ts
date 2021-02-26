import { User } from "../../models/user.model";
import { AuthenticateAction } from "../actions/authenticate.action";
import { AuthenticationState } from "../authentication.state";

export function authenticateReducer(state: AuthenticationState, action: AuthenticateAction): AuthenticationState {
  const user: User = new User(
    action.payload.id,
    action.payload.email,
    action.payload.token,
    action.payload.tokenExpirationDate
  );

  return {
    ...state,
    user: user,
    error: null,
    loading: false
  } as AuthenticationState;
}
