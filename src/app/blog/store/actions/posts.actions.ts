import { Action } from '@ngrx/store';
import { Post } from '../../models/post.interface';
import { PostDTO } from '../../models/postDTO.interface';

export enum PostsActionTypes {
  LOAD_POSTS = '[Posts] Load Posts',
  LOAD_POSTS_SUCCESS = '[Posts] Load Posts Success',
  LOAD_POSTS_FAIL = '[Posts] Load Posts Fail',

  ADD_POST = '[Post] Add Post',
  ADD_POST_SUCCESS = '[Post] Add Post Success',
  ADD_POST_FAIL = '[Post] Add Post Fail',
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_SUCCESS;
  constructor(public payload: Post[]) { }
}

export class LoadPostsFail implements Action {
  readonly type = PostsActionTypes.LOAD_POSTS_FAIL;
  constructor(public payload: any) { }
}

export class AddPost implements Action {
  readonly type = PostsActionTypes.ADD_POST;
  constructor(public payload: PostDTO) { }
}
export class AddPostSuccess implements Action {
  readonly type = PostsActionTypes.ADD_POST_SUCCESS;
  constructor(public payload: Post[]) { }
}
export class AddPostFail implements Action {
  readonly type = PostsActionTypes.ADD_POST_FAIL;
  constructor(public payload: any) { }
}

export type PostsActions = LoadPosts | LoadPostsFail | LoadPostsSuccess | AddPost | AddPostSuccess | AddPostFail;
