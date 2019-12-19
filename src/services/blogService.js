const blogPosts = 'https://jsonplaceholder.typicode.com/posts';
// To get the comments add the id and 'comments' to the end

export function getPosts() {
  fetch(blogPosts, {
    method: 'POST',
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(console.log)
    .catch(console.log);
}
