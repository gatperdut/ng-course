import { SigninAction } from "./signin.action";
import { SignoutAction } from "./signout.action";

const _authenticationActions = [
  SigninAction,
  SignoutAction
];

const _authenticationActionPrototypes = [
  SigninAction.prototype,
  SignoutAction.prototype
] as const;

export type AuthenticationAction = typeof _authenticationActionPrototypes[number];

export type AnyAuthenticationAction =
  AuthenticationAction
;

export function isAuthenticationAction(action: AnyAuthenticationAction): action is AuthenticationAction {
  return _authenticationActions.some(clazz => action instanceof clazz);
}
