import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as authActions from '../actions/auth.actions';

import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PostsService } from '../../services/posts.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LOGIN),

    map(() => new authActions.LoginSuccess()),
    catchError(error => of(new authActions.LoginFail(error))),
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LOGOUT),
    map(() => new authActions.LogoutSuccess()),
    catchError(error => of(new authActions.LoginFail(error))),
  );
}
