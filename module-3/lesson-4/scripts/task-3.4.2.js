var favouriteFoods=['Lasagne','Crisps', 'Aglio e olio', 'Hummus'];

console.log(favouriteFoods); // This outputs the array as a whole- you can see each value within it and the length in the console.

for(var index=0; index<=2; index++){
    console.log(favouriteFoods[index]); // this picks the 0-2 values of the favouriteFoods array and displays them as individually.
}
for(var index=0; index<=favouriteFoods.length; index++){
    console.log(favouriteFoods[index]); // this picks each value in the array and displays them all individually- index will keep going ++ until it reaches the favouriteFoods array length.
}
