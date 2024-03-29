import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as postsActions from '../actions/posts.actions';

import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PostsService } from '../../services/posts.service';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  @Effect()
  loadComments$ = this.actions$.pipe(
    ofType(postsActions.PostsActionTypes.LOAD_POSTS),
    switchMap(() => {
      return this.postsService.getPosts().pipe(
        map(posts => new postsActions.LoadPostsSuccess(posts)),
        catchError(error => of(new postsActions.LoadPostsFail(error))),
      );
    }),
  );

  @Effect()
  addPost$ = this.actions$.pipe(
    ofType(postsActions.PostsActionTypes.ADD_POST),
    switchMap(action => {
      console.log(action);
      return this.postsService.addPost(action['payload']).pipe(
        map(post => new postsActions.AddPostSuccess(post)),
        catchError(error => of(new postsActions.LoadPostsFail(error))),
      );
    }),
  );

  @Effect()
  deletePost$ = this.actions$.pipe(
    ofType(postsActions.PostsActionTypes.DELETE_POST),
    switchMap(action => {
      console.log('action: ', action);
      return this.postsService.deletePost(action['payload']).pipe(
        map(() => new postsActions.DeletePostSuccess(action['payload'])),
        catchError(error => of(new postsActions.LoadPostsFail(error))),
      );
    }),
  );
}
