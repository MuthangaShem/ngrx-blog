import { Post } from '../../models/post.interface';
import { PostsActions, PostsActionTypes } from '../actions/posts.actions';

export interface PostState {
  entities: { [id: number]: Post }
  loading: boolean;
  loaded: boolean;
}

export const initialState: PostState = {
  entities: {},
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
      const posts = action.payload;

      const entities = posts.reduce((entities: { [id: number]: Post }, post) => {
        return {
          ...entities,
          [post.id]: post
        }
      }, {
        ...state.entities
      })

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case PostsActionTypes.LOAD_POSTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }
    case PostsActionTypes.ADD_POST: {
      return {
        ...state,
        loading: true,
      };
    }
    case PostsActionTypes.ADD_POST_SUCCESS: {
      const post = action.payload;

      const entities = post.reduce((entities: { [id: number]: Post }, post) => {
        return {
          ...entities,
          [post.id]: post
        }
      }, {
        ...state.entities
      })
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
    case PostsActionTypes.ADD_POST_SUCCESS: {
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

export const getPostsEntities = (state: PostState) => state.entities;
export const getPostsLoading = (state: PostState) => state.loading;
export const getPostsLoaded = (state: PostState) => state.loaded;
