function shoppingCartFoodDiscount(array){
    
    let totalPrice= 0;
    
    for ( let index=0;index<array.length;index++){

        if (array[ index ].type === "food"){ 
            itemPrice=array[ index ].price*0.8; //any that are type 'food', you give 20% discount
        } else{ 
            itemPrice=array[ index ].price; // any that aren't type food are just the price as it comes
        }

        totalPrice= totalPrice + itemPrice * array[ index ].quantity; // 'itemPrice' is the price of the item after it has gone through the if statement. 

    }

    return totalPrice.toFixed(2); 
  }

console.log(shoppingCartFoodDiscount(shoppingCart)); 