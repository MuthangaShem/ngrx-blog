import { environment } from './../../../../environments/environment.prod';
import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
  createSelector
} from '@ngrx/store';
import * as fromPosts from './posts.reducer';
import * as fromComments from './comments.reducer';
import * as fromAuth from './auth.reducer';

export interface BlogState {
  posts: fromPosts.PostState,
  comments: fromComments.CommentState,
  auth: fromAuth.AuthState
}

export const reducers: ActionReducerMap<BlogState> = {
  posts: fromPosts.reducer,
  comments: fromComments.reducer,
  auth: fromAuth.reducer,
};

export const getBlogState = createFeatureSelector<BlogState>('blog');

export const metaReducers: MetaReducer<BlogState>[] = !environment.production ? [] : [];
