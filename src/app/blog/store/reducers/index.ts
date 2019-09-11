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

export const getPostState = createSelector(getBlogState, (state: BlogState) => state.posts)

export const getAllPostsEntities = createSelector(getPostState, fromPosts.getPostsEntities);
export const getAllPosts =
  createSelector(getAllPostsEntities, (entities) => {
    return Object.keys(entities).map(id => entities[id]);
  });
export const getPostsLoading = createSelector(getPostState, fromPosts.getPostsLoading);
export const getPostsLoaded = createSelector(getPostState, fromPosts.getPostsLoaded);

export const metaReducers: MetaReducer<BlogState>[] = !environment.production ? [] : [];
