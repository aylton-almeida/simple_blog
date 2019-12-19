import {SET_POSTS_LIST} from './actionTypes';

export const setPostsList = posts => ({
  type: SET_POSTS_LIST,
  payload: posts,
});
