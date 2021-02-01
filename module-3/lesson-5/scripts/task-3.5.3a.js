function shoppingCartCustomPrice(array, discountAmount, itemType){
    
    let totalPrice= 0;

    for (let index=0;index<array.length;index++){

    if (itemType===array[ index ].type){
        itemPrice= array[ index ].price/100 * (100-discountAmount);
    } else if (itemType==="any"){
        itemPrice= array[ index ].price/100 * (100-discountAmount);
    }  else {
        itemPrice=array[ index ].price;
    }

    totalPrice= totalPrice + itemPrice * array[ index ].quantity; 

    }

    return totalPrice.toFixed(2); 
  }

console.log(shoppingCartCustomPrice(shoppingCart, 50, "any")); 
    