let button = document.querySelector('button'); //selects button
    button.addEventListener('mouseover', function(){
        console.log('mouse over');
    } ); // in the event the mouse hovers over the button, 'mouse over' will appear in console log 

// alternative way to use addEventListener

let clickButton = function(){
    alert('You clicked the button'); // create a function with the event you want to happen
}
button.addEventListener('click', clickButton); // invoke that function in the addEventListener parenthesis instead of writing out the function directly in the parentesis. This means you can call on the clickButton function again if you want.