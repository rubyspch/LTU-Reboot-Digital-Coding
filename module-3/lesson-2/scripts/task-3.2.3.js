/* EXAMPLE */

function greet(greeting, name) {
  return greeting + ' ' + name;
}

var message = greet('Hello', 'Luke');
    console.log( message ); // Output: Hello Luke

/* EXAMPLE */

// ADD YOUR CODE BELOW HERE
function showFullName(fName, sName){ 
  var fullName = fName + sName + '<br>';
  return fullName; 
}

var person1 = showFullName('Ruby ', 'Chohan'); //This stores the function Ruby+Chohan+br into person1 variable, then you can display it later

document.write(person1); //This displays the function output that has been stored into person1 variable
// ADD YOUR CODE ABOVE HERE