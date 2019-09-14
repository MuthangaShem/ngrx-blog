import { Action } from '@ngrx/store';
import { Comment } from '../../models/comment.interface';
import { CommentDTO } from '../../models/commentDTO.interface';

export enum CommentsActionTypes {
  LOAD_COMMENTS = '[Comments] Load Comments',
  LOAD_COMMENTS_SUCCESS = '[Comments] Load Comments Success',
  LOAD_COMMENTS_FAIL = '[Comments] Load Comments Fail',

  ADD_COMMENT = '[Comment] Add Comment',
  ADD_COMMENT_SUCCESS = '[Comment] Add Comment Success',
  ADD_COMMENT_FAIL = '[Comment] Add Comment Fail',
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

export class AddComment implements Action {
  readonly type = CommentsActionTypes.ADD_COMMENT;
  constructor(public payload: CommentDTO) { }
}
export class AddCommentSuccess implements Action {
  readonly type = CommentsActionTypes.ADD_COMMENT_SUCCESS;
  constructor(public payload: CommentDTO[]) { }
}
export class AddCommentFail implements Action {
  readonly type = CommentsActionTypes.ADD_COMMENT_FAIL;
  constructor(public payload: any) { }
}


export type CommentsActions = LoadComments | LoadCommentsFail | LoadCommentsSuccess | AddComment | AddCommentSuccess | AddCommentFail;
