import {store} from '../store/store';
import {SET_POSTS_LIST} from '../store/actions/actionTypes';

const blogPosts = 'https://jsonplaceholder.typicode.com/posts';
// To get the comments add the id and 'comments' to the end
const userList = 'https://jsonplaceholder.typicode.com/users';

/**
 * Retrieve posts from database
 */
export async function getPosts() {
  let postList;
  return fetch(blogPosts)
    .then(response => response.json())
    .then(list => {
      postList = list;
      return getUsers();
    })
    .then(list => {
      postList.map(
        item =>
          (item.authorName = list.find(user => user.id === item.userId).name),
      );
      console.log(postList[0]);
      store.dispatch({type: SET_POSTS_LIST, payload: postList});
    });
}

export async function getUsers() {
  return fetch(userList).then(response => response.json());
}
