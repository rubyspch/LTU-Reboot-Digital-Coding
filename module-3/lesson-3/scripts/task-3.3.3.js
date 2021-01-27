function calculator(numberOne, numberTwo, operator){
    switch (operator){
        case '+':
            document.write(numberOne + operator + numberTwo + '=' + (numberOne+numberTwo)+ '<br>');
            break;
        case '-':
            document.write(numberOne + operator + numberTwo + '=' + (numberOne-numberTwo)+ '<br>');
            break;
        case 'x':
            document.write(numberOne + operator + numberTwo + '=' + (numberOne*numberTwo)+ '<br>');
            break;
        case '÷':
            document.write(numberOne + operator + numberTwo + '=' + (numberOne/numberTwo) + '<br>')
            break;
        default:
            document.write('Invalid Calculation' + '<br>');
            break;
    }
}

calculator(6,5,'÷');
calculator(6,5, '@');
calculator(30, 60, '+')

/* ALTERNATIVE CODE
function calculator(numberOne, numberTwo, operator){
    var result= '';
    switch(operator){
        case '+':
            result = numberOne+numberTwo;
            console.log(numberOne + ' + ' + numberTwo + ' = ' + result);
            break;
        ETC
    } 
}THIS IS CREATING A VAR FOR THE SOLUTION AND CONCATONATING WITH THIS VAR, RATHER THAN CALCULATING THE ANSER WITHIN THE CONCATONATION.
*/