
// Old style with XMLHttpRequest
//document.querySelector('#load-comments-button').addEventListener('click', function() {
//
//  var requestObject = new XMLHttpRequest();
//  requestObject.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
//  requestObject.onload = function() {
//    console.log('We received a response to our request');
//    console.log(requestObject.response);
//
//
//    // Now we want to generate DOM Node to display every comment we received as JSON
//    var comments = JSON.parse(requestObject.response);
//    var commentsContainerNode = document.querySelector('.comments');
//    comments.forEach((comment) => {
//      var newCommentNode = document.createElement('p');
//      newCommentNode.textContent = comment.body;
//      commentsContainerNode.appendChild(newCommentNode);  
//      commentsContainerNode.appendChild(document.createElement('hr'));  
//    });
//  }
//  requestObject.send();
//});


// modern style with fetch()

document.querySelector('#load-comments-button').addEventListener('click', function() {
  fetch('http://localhost:3014/articles/1/comments')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log('We received a response to our request');
    console.log(response);


    // Now we want to generate DOM Node to display every comment we received as JSON
    var comments = response;

    comments.forEach((comment) => {
      addNewCommentNode(comment.content);
    });
  });
});

// The fetch API has many powerfull options, see documentation for more details
// MDN : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// A cheat sheet : https://devhints.io/js-fetch





function addNewCommentNode(commentText) {
  var commentsContainerNode = document.querySelector('.comments');

  var newCommentNode = document.createElement('p');
  newCommentNode.textContent = commentText;
  commentsContainerNode.appendChild(newCommentNode);  
  commentsContainerNode.appendChild(document.createElement('hr'));  
}


// How to make POST request

//
// We want to create a new comment when the user fills the "new comment" text area and clicks the "new comment" button
//
//
// 1. Set a handler on the click event of the button
// 2. On click, check that the textarea has content
// 3. Build a XHR request object, with method POST, to the endpoint for creating comments, set the body of the request
//    with a JSON string representing the comment object (see the endpoint documentation to see what JSON format is expected)
// 4. Send the request, on successful response, add the new comment to our HTML document

document.querySelector('#new-comment-publish-button').addEventListener('click', function() {

  var newCommentText = document.querySelector('#new-comment-textarea').value;

  if (!newCommentText) {
    // Textarea is empty, do nothing
    return;
  }

  var requestObject = new XMLHttpRequest();
  requestObject.open('POST', 'http://localhost:3014/articles/1/comments');
  requestObject.setRequestHeader("Content-Type", "application/json");

  requestObject.onload = function() {
    console.log('We received a response to our POST request');
    console.log(requestObject.response);

    // We add the comment to the document
    addNewCommentNode(newCommentText);
  }
  
  var newCommentObject = {
    author: "anonymous",
    content: newCommentText
  };

  requestObject.send(JSON.stringify(newCommentObject));
});




// To go further 
// Make the "send" button look disabled when the textarea is empty.
// For this we need to dynamically add the HTML attribute "disabled" to <button>, we need to write JS
// code that listen to textarea "change" event, every time something is written in the textarea, if 
// the new value is empty, we set the "disabled" attribute on <button>, otherwise we remove it




// loading the comments on page load, without a button click
document.addEventListener("DOMContentLoaded", function() {
  fetch('http://localhost:3014/articles/1/comments')
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // Now we want to generate DOM Node to display every comment we received as JSON
    var comments = response;

    comments.forEach((comment) => {
      addNewCommentNode(comment.content);
    });
  });
});

// To go further. Transform the "load comments" into a "reload comments" button
