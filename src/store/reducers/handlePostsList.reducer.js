import {SET_POSTS_LIST} from '../actions/actionTypes';

const initialState = [];

export function handlePostsList(state = initialState, {type, payload}) {
  if (type === SET_POSTS_LIST) {
    return [...payload];
  } else {
    return state;
  }
}
