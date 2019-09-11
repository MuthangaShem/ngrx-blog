import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as commentsActions from '../actions/comments.actions';

import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CommentsService } from '../../services/comments.service';


@Injectable()
export class CommentsEffects {
  constructor(private actions$: Actions,
    private blogService: CommentsService
  ) { }

  @Effect()
  loadComments$ = this.actions$
    .pipe(ofType(commentsActions.CommentsActionTypes.LOAD_COMMENTS),
      switchMap(() => {
        return this.blogService.getComments()
          .pipe(
            map(comments => new commentsActions.LoadCommentsSuccess(comments)),
            catchError(error => of(new commentsActions.LoadCommentsFail(error)))
          )
      }));
}
