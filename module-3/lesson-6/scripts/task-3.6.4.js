var disabledLink= document.querySelector('a.disabled') //grabs the anchor tag with class 'disabled'.

disabledLink.addEventListener("click", function(event){// selects the click event
    event.preventDefault(); // removes the default destination, so the link won't work now
    alert("This link does not work"); // instead when you click alert box will appear
});