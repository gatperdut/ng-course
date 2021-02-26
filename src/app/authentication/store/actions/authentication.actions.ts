import { LoginAction } from "./login.action";

const _authenticationActions = [
  LoginAction
];

const _authenticationActionPrototypes = [
  LoginAction.prototype
] as const;

export type AuthenticationAction = typeof _authenticationActionPrototypes[number];

export type AnyAuthenticationAction =
  AuthenticationAction
;

export function isAuthenticationAction(action: AnyAuthenticationAction): action is AuthenticationAction {
  return _authenticationActions.some(clazz => action instanceof clazz);
}
