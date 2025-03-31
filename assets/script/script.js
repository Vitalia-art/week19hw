function createPostHTML(post) {
    return `
      <div class="post">
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div>
      </div>
    `;
  }
  
  // Функция для добавления разметки на страницу
  function addPostsToContainer(posts) {
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
      const postHTML = createPostHTML(post);
      postsContainer.innerHTML += postHTML;
    });
  }
  
  // Функция для получения данных с сервера и отображения на странице
  function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        addPostsToContainer(posts);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }
  
  // Вызов функции для загрузки данных и отображения на странице
  document.addEventListener('DOMContentLoaded', fetchPosts);