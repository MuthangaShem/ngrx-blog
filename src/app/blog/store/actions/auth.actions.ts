import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAIL = '[Login] Login Fail',
  LOGOUT = '[Logout] Logout ',
  LOGOUT_SUCCESS = '[Logout] Logout Success',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
}
export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
}
export class LoginFail implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}
export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LogoutSuccess;
