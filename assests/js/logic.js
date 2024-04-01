function renderMessage(){
  const postBlog = JSON.parse(localStorage.getItem('blogpost'));

  if (postBlog !== null) {
    document.getElementById('saved-name').innerHTML = postBlog.username;
    document.getElementById('saved-title').innerHTML = postBlog.blogtitle;
    document.getElementById('saved-content').innerHTML = postBlog.content;
  }
}


function init() {
    
    renderMessage();
  }
  init();
