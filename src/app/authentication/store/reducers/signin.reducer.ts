import { User } from "../../models/user.model";
import { SigninAction } from "../actions/signin.action";
import { AuthenticationState } from "../authentication.state";

export function signinReducer(state: AuthenticationState, action: SigninAction): AuthenticationState {
  const user: User = new User(
    action.payload.id,
    action.payload.email,
    action.payload.token,
    action.payload.tokenExpirationDate
  );

  return {
    ...state,
    user: user
  } as AuthenticationState;
}
