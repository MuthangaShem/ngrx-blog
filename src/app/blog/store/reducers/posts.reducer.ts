import { Post } from '../../models/post.interface';
import { PostsActions, PostsActionTypes } from '../actions/posts.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface PostState extends EntityState<Post> {
  loading: boolean;
  loaded: boolean;
}
export const postAdapter = createEntityAdapter<Post>();

export const initialState: PostState = postAdapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(state = initialState, action: PostsActions): PostState {
  switch (action.type) {
    case PostsActionTypes.LOAD_POSTS: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case PostsActionTypes.LOAD_POSTS_SUCCESS: {
      const posts = action.payload;
      return postAdapter.addAll(posts, {
        ...state,
        loading: false,
        loaded: true,
      });
    }
    case PostsActionTypes.LOAD_POSTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case PostsActionTypes.ADD_POST: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case PostsActionTypes.ADD_POST_SUCCESS: {
      const post = action.payload;
      console.log('Returned payload: ', post);
      return postAdapter.addOne(post, {
        ...state,
        loading: false,
        loaded: true,
      });
    }
    case PostsActionTypes.ADD_POST_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case PostsActionTypes.DELETE_POST: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case PostsActionTypes.DELETE_POST_SUCCESS: {
      const post = action.payload;
      return postAdapter.removeOne(post, {
        ...state,
        loading: false,
        loaded: true,
      });
    }
    case PostsActionTypes.DELETE_POST_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default:
      return state;
  }
}

const { selectIds, selectEntities, selectAll } = postAdapter.getSelectors();

export const getPostsEntities = selectEntities;

// export const getPostsEntities = (state: PostState) => state.entities;
export const getPostsLoading = (state: PostState) => state.loading;
export const getPostsLoaded = (state: PostState) => state.loaded;

export const getPostIds = selectIds;

// select the dictionary of post entities
export const getPostEntities = selectEntities;

// select the array of posts
export const getAllPosts = selectAll;
