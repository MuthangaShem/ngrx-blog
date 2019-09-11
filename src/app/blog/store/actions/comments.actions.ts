import { Action } from '@ngrx/store';
import { Comment } from '../../models/comment.interface';

export enum CommentsActionTypes {
  LOAD_COMMENTS = '[Comments] Load Comments',
  LOAD_COMMENTS_SUCCESS = '[Comments] Load Comments Success',
  LOAD_COMMENTS_FAIL = '[Comments] Load Comments Fail',
}

export class LoadComments implements Action {
  readonly type = CommentsActionTypes.LOAD_COMMENTS;
}

export class LoadCommentsSuccess implements Action {
  readonly type = CommentsActionTypes.LOAD_COMMENTS_SUCCESS;
  constructor(public payload: Comment[]) { }
}

export class LoadCommentsFail implements Action {
  readonly type = CommentsActionTypes.LOAD_COMMENTS_FAIL;
  constructor(public payload: any) { }
}

export type CommentsActions = LoadComments | LoadCommentsFail | LoadCommentsSuccess;
