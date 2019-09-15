import { AuthActionTypes, AuthActions } from '../actions/auth.actions';
import { createFeatureSelector } from '@ngrx/store';
import { User } from '../../models/user.interface';

export interface AuthState {
  // is a user authenticated?
  isAuthenticated: boolean;
  // error message
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  errorMessage: null
};


export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LOGIN: {
      return state
    }

    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        errorMessage: null
      };
    }

    case AuthActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }

    case AuthActionTypes.LOGOUT: {
      return state
    }

    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: null
      };
    }




    default: {
      return state;
    }
  }
}

export const getLoginStatus = (state: AuthState) => state.isAuthenticated;
export const getLoginError = (state: AuthState) => state.errorMessage;
