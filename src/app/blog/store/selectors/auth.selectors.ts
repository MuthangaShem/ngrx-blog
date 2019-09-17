import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthState = createSelector(
  fromFeature.getBlogState,
  (state: fromFeature.BlogState) => state.auth,
);

export const getLoginStatus = createSelector(
  getAuthState,
  fromAuth.getLoginStatus,
);

export const getLoginError = createSelector(
  getAuthState,
  fromAuth.getLoginError,
);
