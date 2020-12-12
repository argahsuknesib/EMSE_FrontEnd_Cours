console.log('Hello');


var toggleCommentsButton = document.getElementById('toggle-comments-button');
var commentsContainer = document.getElementById('comments-container');


toggleCommentsButton.addEventListener('click', function() {
  commentsContainer.classList.toggle('invisible');
});



