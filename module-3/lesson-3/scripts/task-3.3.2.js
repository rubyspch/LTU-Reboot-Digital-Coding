function drinkOrder(size, drink){
    switch(drink) {
        case 'tea':
            console.log('You have ordered a ' + size + ' ' + drink);
            break;
        case 'coffee':
            console.log('You have ordered a ' + size + ' ' + drink);
            break;
        case 'hot chocolate':
            console.log('You have ordered a ' + size + ' ' + drink);
            break;
        default: 
            console.log('We do not serve this drink');
            break;
    }
}
drinkOrder('large', 'hot chocolate');

// Could you to.lowercase() so it will convert TEA to tea. This will mean it can recognise the drink  however you type it.