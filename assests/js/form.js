const username = document.getElementById('username');
const blogtitle = document.getElementById('blogtitle');
const content = document.getElementById('content');
document.querySelector('.blogForm').addEventListener("submit", saveBlogPost)
function saveBlogPost(event) {
  // Save related form data as an object
  event.preventDefault()
  let blogPosts = localStorage.getItem("blogPost") ? JSON.parse(localStorage.getItem("blogPost")) : []
  console.log(blogPosts)
  const blogPost = {
    username: username.value,
    title: blogtitle.value,
    comment: content.value,
  };

  console.log(blogPost);
  blogPosts.push(blogPost)
  localStorage.setItem('blogPost', JSON.stringify(blogPosts));
}
