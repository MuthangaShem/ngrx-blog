import { environment } from './../../../../environments/environment.prod';
import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
  createSelector
} from '@ngrx/store';
import * as fromPosts from './posts.reducer';

export interface BlogState {
  posts: fromPosts.PostState
}

export const reducers: ActionReducerMap<BlogState> = {
  posts: fromPosts.reducer
};

export const getBlogState = createFeatureSelector<BlogState>('blog');

export const metaReducers: MetaReducer<BlogState>[] = !environment.production ? [] : [];
