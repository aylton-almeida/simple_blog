import {combineReducers} from 'redux';
import {handlePostsList} from './handlePostsList.reducer';

export const Reducers = combineReducers({
  postList: handlePostsList,
});
