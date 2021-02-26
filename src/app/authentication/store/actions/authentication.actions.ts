import { SigninAction } from "./signin.action";

const _authenticationActions = [
  SigninAction
];

const _authenticationActionPrototypes = [
  SigninAction.prototype
] as const;

export type AuthenticationAction = typeof _authenticationActionPrototypes[number];

export type AnyAuthenticationAction =
  AuthenticationAction
;

export function isAuthenticationAction(action: AnyAuthenticationAction): action is AuthenticationAction {
  return _authenticationActions.some(clazz => action instanceof clazz);
}
