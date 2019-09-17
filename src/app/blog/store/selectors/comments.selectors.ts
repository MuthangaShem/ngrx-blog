import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromComments from '../reducers/comments.reducer';

export const getCommentState = createSelector(
  fromFeature.getBlogState,
  (state: fromFeature.BlogState) => state.comments,
);

export const getCommentsEntities = createSelector(
  getCommentState,
  fromComments.getCommentEntities,
);

export const getAllComments = createSelector(
  getCommentsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  },
);
