var myArray = ['one', 'two', 'three'];
for(var i = 0; i < myArray.length; i++) {
  var item = myArray[i];
  console.log(item);
}

// or, shorter but still imperative
for(var item of myArray) {
  console.log(item);
}
