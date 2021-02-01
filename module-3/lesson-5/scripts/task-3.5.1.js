function shoppingCartTotalPrice(array){
    
    let totalPrice= 0;
    
    for ( let index=0;index<array.length;index++){
        // console.log(array[index].price) //shows each of the prices
         // console.log(array[index].quantity) //shows quantity of each of the items
        //array[index].price * array [index].quantity;// shows price * quantity for each 
        totalPrice= totalPrice + array[ index ].price * array[ index ].quantity; //this adds the prices of each item to totalPrice 
    }
    return totalPrice.toFixed(2); // have to put this outside for loop for global scope
  }

console.log(shoppingCartTotalPrice(shoppingCart)); 