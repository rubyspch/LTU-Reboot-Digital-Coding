var cappucino= 3.20;
var latte= 3.20;
var chocolateCake= 2.90;
var gingerBreadMan= 2.50;
var totalBeforeTip= cappucino + latte + chocolateCake + gingerBreadMan;
document.write('Total: ' + totalBeforeTip.toFixed(2) + '<br>'); // This displays the total of the items bought

var tipPercentage= 0.1;
var totalTip= totalBeforeTip * tipPercentage
document.write('10% Tip: ' + totalTip.toFixed(2) + '<br>'); //This displays 10% of the total amount for the items bought

var totalAfterTip= totalBeforeTip + totalTip
document.write('The total amount due is '+ totalAfterTip.toFixed(2)) //This displays total of the items bought plus the tip