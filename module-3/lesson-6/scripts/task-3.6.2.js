let div = document.querySelectorAll('div')[0]; //selects the div element on the HTML page

let newParagraph = document.createElement('p'); //creates p element 
let newTextNode =document.createTextNode('This is the new text node');  // this is the text for the p

    newParagraph.appendChild(newTextNode); // appends the text to the p
    div.appendChild(newParagraph); // appends the p (with the text added) into the div

    //can add styles to this now in js