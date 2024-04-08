function openModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  function savePost() {
    var title = document.getElementById('post-title').value;
    var text = document.getElementById('post-text').value;
  
    if (title && text) {
      var post = {
        title: title,
        text: text
      };
  
      var posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));
  
      displayPosts();
  
      closeModal();
    } else {
      alert('Please enter both title and text for the post.');
    }
  }
  
  function displayPosts() {
    var postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
  
    var posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    posts.forEach(function(post) {
      var postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = '<h2>' + post.title + '</h2><p>' + justifyText(post.text) + '</p>';
      postsContainer.appendChild(postElement);
    });
  }
  
  function justifyText(text) {
    // Add one centimeter paragraph space to the beginning of each first line of the paragraph
    text = text.replace(/\n(?!$)/g, '\n&nbsp;&nbsp;&nbsp;&nbsp;');
  
    // Justify the text with 1.5 line spacing
    return '<span style="line-height: 1.5; text-align: justify;">' + text + '</span>';
  }
  
  // Display existing posts when the page loads
  displayPosts();
