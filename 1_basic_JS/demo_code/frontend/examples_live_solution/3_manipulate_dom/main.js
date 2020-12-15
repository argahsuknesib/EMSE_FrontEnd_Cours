
// Get a DOM Node
var myDOMNode = document.getElementById('title');

// document is a global object always accessible to JS code running into the browser


// Using querySelector
// The query syntax is the same than selectors in CSS
myDOMNode = document.querySelector('h2.comment-title');



// I can create new Nodes
var newParagraph = document.createElement("p");
newParagraph.textContent = "A comment generated from my JS code";

// This Node exist as a variable in my JS code, but is not currently inserted  into the document

// Insert a node into the document
var commentsDiv = document.querySelector('.comments');
commentsDiv.appendChild(document.createElement("hr"));
commentsDiv.appendChild(newParagraph);




// React to events happening in  the document
var buttonNode = document.querySelector('#show-hide-button');
buttonNode.addEventListener('click', function(event) {
  console.log('Button was clicked!');
});


// Now I want the click on the button to show or hide the comments section

buttonNode.addEventListener('click', function(event) {
  document.querySelector('.comments').classList.toggle('hidden');
});
