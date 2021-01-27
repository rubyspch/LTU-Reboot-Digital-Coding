var tempurature= 31;
var rain= 0;

if (tempurature<0){ 
     document.write('You should stay inside');
} else if (tempurature<30 && rain==1){
    document.write('You need an umbrella and a coat');
} else if (tempurature<30 && rain==0){
    document.write('You need a coat');
} else if (tempurature<50 && rain==1){ 
     document.write('You need an umbrella and a coat'); 
 } else if (tempurature<50 && rain==0){ 
    document.write('You need a coat'); 
 }