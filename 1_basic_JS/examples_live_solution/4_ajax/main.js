
document.querySelector('#load-comments-button').addEventListener('click', function() {

  var requestObject = new XMLHttpRequest();
  requestObject.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
  requestObject.onload = function() {
    console.log('We received a response to our request');
    console.log(requestObject.response);


    // Now we want to generate DOM Node to display every comment we received as JSON
    var comments = JSON.parse(requestObject.response);
    var commentsContainerNode = document.querySelector('.comments');
    comments.forEach((comment) => {
      var newCommentNode = document.createElement('p');
      newCommentNode.textContent = comment.body;
      commentsContainerNode.appendChild(newCommentNode);  
      commentsContainerNode.appendChild(document.createElement('hr'));  
    });
  }
  requestObject.send();
});
