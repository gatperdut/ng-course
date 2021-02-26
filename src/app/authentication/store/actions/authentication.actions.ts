import { AuthenticateFailAction } from "./authenticate-fail.action";
import { SigninPreAction } from "./signin-pre.action";
import { AuthenticateAction } from "./authenticate.action";
import { SignoutAction } from "./signout.action";
import { SignupPreAction } from "./signup-pre.action";

const _authenticationActions = [
  SignupPreAction,
  SigninPreAction,
  AuthenticateAction,
  AuthenticateFailAction,
  SignoutAction
];

const _authenticationActionPrototypes = [
  SignupPreAction.prototype,
  SigninPreAction.prototype,
  AuthenticateAction.prototype,
  AuthenticateFailAction.prototype,
  SignoutAction.prototype
] as const;

export type AuthenticationAction = typeof _authenticationActionPrototypes[number];

export type AnyAuthenticationAction =
  AuthenticationAction
;

export function isAuthenticationAction(action: AnyAuthenticationAction): action is AuthenticationAction {
  return _authenticationActions.some(clazz => action instanceof clazz);
}
