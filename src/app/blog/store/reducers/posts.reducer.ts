import { Post } from '../../models/post.interface';
import { PostsActions, PostsActionTypes } from '../actions/posts.actions';

export interface PostState {
  // entities: { [id: number]: Post }
  data: Post[]
  loading: boolean;
  loaded: boolean;
}

export const initialState: PostState = {
  // entities: {},
  data: [],
  loading: false,
  loaded: false,
};

export function reducer(
  state = initialState,
  action: PostsActions): PostState {
  switch (action.type) {
    case PostsActionTypes.LOAD_POSTS: {
      return {
        ...state,
        loading: true,
      }
    }
    case PostsActionTypes.LOAD_POSTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case PostsActionTypes.LOAD_POSTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }
    default:
      return state;
  }
}

export const getPosts = (state: PostState) => state.data;
export const getPostsLoading = (state: PostState) => state.loading;
export const getPostsLoaded = (state: PostState) => state.loaded;
// export const getPostsEntities = (state: PostState) => state.data;
