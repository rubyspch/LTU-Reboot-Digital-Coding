//PRACTICE FOR LOOP
const people= ['Ruby', 'Seth', 'Sam', 'Nav', 'Jo', 'Matthew', 'Squish'];
for(person of people){ //creates a loop- each value or 'person' in 'people' will be looped through, and the instruction within the {} will tell the loop what to do.
    console.log(`Hello there ${person}`); // console.log will read Hello there 'person' for each 'person' in the array as it loops through them.
}

const people2= ['Ruby', 'Seth', 'Sam', 'Nav', 'Jo', 'Matthew', 'Squish'];
for(person2 of people2){
    console.log(person2); // If you remove this line the console.log will only state 'Nav is in my list!', as the only instruction will be if 'Nav' statement, so it will loop through the array to find 'Nav' without stating each 'person2'.
    if(person2==='Nav'){
        console.log('Nav is in my list!'); //Once it has found Nav the function will keeping looping/running through the array. To stop the loop from continuing to run, write 'break;' (As in Switch statements)
        break;
    } 
}

// PRACTICE WHILE LOOP

let loading = 0; //The goal of the function is to stop loading at 100, so need to modify this value to increase.
while(loading<100){
    console.log('The website is still loading');
    loading++; //This will add 1 to 'loading' and output 'The website is still loading' until 'loading' equals 100.
} 
if (loading==100){ // This will run once the while loop has run enough times for 'loading' to equal 100.
    console.log('The website has loaded');
}