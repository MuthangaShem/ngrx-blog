import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as postsActions from '../actions/posts.actions';

import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { BlogService } from '../../services/blog.service';


@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions,
    private blogService: BlogService
  ) { }

  @Effect()
  loadPosts$ = this.actions$
    .pipe(ofType(postsActions.PostsActionTypes.LOAD_POSTS),
      switchMap(() => {
        return this.blogService.getPosts()
          .pipe(
            map(posts => new postsActions.LoadPostsSuccess(posts)),
            catchError(error => of(new postsActions.LoadPostsFail(error)))
          )
      }));
}
