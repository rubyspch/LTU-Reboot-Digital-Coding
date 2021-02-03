const buttons= document.querySelectorAll('button.selection');

const allImages= document.querySelectorAll('main .image-selections .images');

function toggleImages(dataImage){
    if(dataImage=='all'){
        allImages.forEach(function(image){ //cycle through all images...
            image.style.display="flex"; // ...and show them all
        });
    } else {
        allImages.forEach(function(image){ //cycle through images again...
            if (dataImage==image.dataset.class){// ...and if the button data matches image data...
                image.style.diisplay="flex"; // ... then display the image.
            } else{ // but if the data doesn't match...
                image.style.display="none"; //... don't show them
            }
        });
    }
}

buttons.forEach(function(button){ //for every button...
    button.addEventListener('click', function(){ // when you click...
        toggleImages(button.dataset.class); // run the code 
    });
});