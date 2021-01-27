function monthsAlive(age){
    let months= age*12;
    console.log('You have been alive for ' + months +' months!');
}
function weeksAlive(age){
    let weeks=age*52;
    console.log('You have been alive for ' + weeks + ' weeks!');
}
function daysAlive(age){
    let days=age*365;
    console.log('You have been alive for ' + days + ' days!');
}
let yearsAlive = 23;
monthsAlive(yearsAlive);
weeksAlive(yearsAlive);
daysAlive(yearsAlive);
/*OR
monthsAlive(2);
weeksAlive(2);
daysAlive(2); */