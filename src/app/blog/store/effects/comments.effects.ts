import { getRouterState } from './../../../store/reducers/index';
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as commentsActions from '../actions/comments.actions';

import { map, catchError, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { CommentsService } from '../../services/comments.service';
import { Store } from '@ngrx/store';
import * as fromStore from '../';
import * as fromRoot from '../../../../app/store';


@Injectable()
export class CommentsEffects {
  constructor(private actions$: Actions,
    private store: Store<fromStore.BlogState>,
    private commentsService: CommentsService
  ) { }

  @Effect()
  loadComments$ = this.actions$
    .pipe(ofType(commentsActions.CommentsActionTypes.LOAD_COMMENTS),
      withLatestFrom(
        this.store.select(fromRoot.getRouterState),
        (action, router) => {
          console.log('action: ', action);
          console.log('router: ', router);
          return {
            postId: router.state.params.postId,
          }
        }
      ),
      switchMap((action) => {
        return this.commentsService.getComments(action.postId)
          .pipe(
            map(comments => new commentsActions.LoadCommentsSuccess(comments)),
            catchError(error => of(new commentsActions.LoadCommentsFail(error)))
          )
      }));
}
