var tempurature= 
    if (tempurature<0){ //Need to put lowest first because it will stay with the <50 'You need a coat' if it comes first as it meets that first criteria, and the following criteria will not run. 
        document.write('You should stay inside');
    } else if (tempurature<30){
        document.write('You need a hat and a coat');
    } else if (tempurature<50){ 
        document.write('You need a coat'); 
    } 