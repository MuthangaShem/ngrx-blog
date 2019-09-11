import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPosts from '../reducers/posts.reducer';

import { Post } from './../../models/post.interface';

export const getPostState = createSelector(fromFeature.getBlogState, (state: fromFeature.BlogState) => state.posts)

export const getPostsEntities = createSelector(getPostState, fromPosts.getPostsEntities);

export const getSelectedPost = createSelector(
  getPostsEntities,
  fromRoot.getRouterState,
  (entities, router): Post => {
    return router.state && entities[router.state.params.postId]
  }
);

export const getAllPosts =
  createSelector(getPostsEntities, (entities) => {
    return Object.keys(entities).map(id => entities[id]);
  });
export const getPostsLoading = createSelector(getPostState, fromPosts.getPostsLoading);
export const getPostsLoaded = createSelector(getPostState, fromPosts.getPostsLoaded);

