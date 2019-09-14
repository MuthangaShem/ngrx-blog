import * as  fromComments from '../actions/comments.actions';
import { Comment } from '../../models/comment.interface'

export interface CommentState {
  entities: { [id: number]: Comment }
  loading: boolean;
  loaded: boolean;
}

export const initialState: CommentState = {
  entities: {},
  loading: false,
  loaded: false,
};

export function reducer(
  state = initialState,
  action: fromComments.CommentsActions): CommentState {
  switch (action.type) {
    case fromComments.CommentsActionTypes.LOAD_COMMENTS: {
      return {
        ...state,
        loading: true,
      }
    }
    case fromComments.CommentsActionTypes.LOAD_COMMENTS_SUCCESS: {
      const comments = action.payload;

      const entities = comments.reduce((entities: { [id: number]: Comment }, comment) => {
        return {
          ...entities,
          [comment.id]: comment
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
    case fromComments.CommentsActionTypes.LOAD_COMMENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }
    case fromComments.CommentsActionTypes.ADD_COMMENT: {
      return {
        ...state,
        loading: true,
        loaded: false,
      }
    }
    case fromComments.CommentsActionTypes.ADD_COMMENT_SUCCESS: {
      const comment = action.payload;
      console.log('Returned payload: ', comment);

      const entities = comment.reduce((entities: { [id: number]: Comment }, post) => {
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
    case fromComments.CommentsActionTypes.ADD_COMMENT_FAIL: {
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

export const getCommentEntities = (state: CommentState) => state.entities;
export const getCommentsLoading = (state: CommentState) => state.loading;
export const getCommentsLoaded = (state: CommentState) => state.loaded;
