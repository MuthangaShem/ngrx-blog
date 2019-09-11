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
  data: [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }],
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
      // const posts = action.payload;

      // const entities = posts.reduce((entities: { [id: number]: Post }, article) => {
      //   return {
      //     ...entities,
      //     [article.id]: article
      //   }
      // }, {
      //   ...state.entities
      // })
      return {
        ...state,
        loading: false,
        loaded: true,
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
