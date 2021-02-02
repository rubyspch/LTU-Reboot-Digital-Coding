function shoppingCartSpecificPrice(cartArray, lowPrice, highPrice){ // 1. creates function
    let arrItems=[]; // 2. creates empty array

    for (index=0;index<cartArray.length;index++){ //3. this will loop through the cartArray parameter
        if (cartArray[index].price>=lowPrice && cartArray[index].price<=highPrice){ // 4. conditions for code, if the price is between the inputted arguments then execute code
            arrItems.push(cartArray[index]) // 4.pushes the array item to arrItems
        }
    }
    return arrItems; // function remembers the array globally
}
console.log(shoppingCartSpecificPrice(shoppingCart, 5, 10)); // calls the function to filter through shoppingCart array based on price of items

/* 
   We are going to be using an array of objects provided as a simple shopping cart example.​
​
    We need to be able to work out which items cost between 2 price points. So for example, we need the cart to be returned by which products cost more than £2 but less than £5.

    1. Create a function that has 3 arguments “cart”, “lowPrice” and “highPrice”​
    2. Create an empty array called arrItems at the start of the function.​
    3. Loop through each item of the array​
    4. If the price value is higher than or equal to the lowPrice and lower than or equal to the highPrice push to arrItems​
    */