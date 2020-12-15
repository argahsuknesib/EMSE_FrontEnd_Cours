
/**
 * Jquery is an old library. The only way it works : when loaded, it creates a global variable named "$".
 * In javascript "$" is usable as any other character for variable names. 
 *
 * Modern library shouldn't pollute the global namespace with variables, but instead should allow you to 
 * use ES6 module imports.
 *
 */

/* 
 * Our code works only because we rely on JQuery code having been loaded by the HTML page before loading this script.
 * Otherwise the "$" variable will be undefined and the code won't work
 */

/**
 * You can see why it seems a bad coding practice from an software engeenering point of view. Keep in mind,
 * for a long time JS programming wasn't about making big frontend softwares like today, but only adding small functionnalities
 * to mostly static webpages. Only in the past 5 years it has evolved as a modern language with mecanisms to ensure 
 * good software engineering practices. When dealing with legacy code (or recent code written by programmers that have not updated
 * their knowledge about javascript), you will encounter such archaic coding practices.
 */


/**
 * The "$" variable has all JQuery library functions attached to it. See the JQuery doc for details of its API.
 */

/**
 * We do the same app again, with articles comments, but using JQuery only
 */


/**
 * Load all comments on button "load comments" click
 */

// 1. Select the button
var button = $('#load-comments-button');

// 2. Set an event handler
button.on('click', function() {

  // 3. Make a HTTP request
  $.ajax({
    url: 'http://localhost:3014/articles/1/comments',
    success: function(responseData) {
      console.log('Response to our request was received');
      var comments = responseData;

      // 4. Add new DOM nodes for each comment
      comments.forEach(function(comment) {
        $('.comments').append(`<p>${comment.content}</p> <hr/>`);
      });
    }
  })
});



/*
 * POST new comments
 */

$('#new-comment-publish-button').click(function() {
  var newCommentText = $('#new-comment-textarea').val();

  $.ajax({
    url: 'http://localhost:3014/articles/1/comments',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      author: "anonymous",
      content: newCommentText
    }),
    success: function() {
      console.log('The POST request was successfull');
      // Add the new comment to the HTML document
      $('.comments').append(`<p>${newCommentText}</p> <hr/>`);
    }
  });
});
