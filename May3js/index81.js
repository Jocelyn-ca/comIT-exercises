// Create a new index81.js file
// Copy and paste the code from exercise 71
// Refactor the code to use do/while instead of while

var number1=9;
var number2=1;
var result='';
do {
    result=number1*number2;
    console.log(`${number1} times ${number2} equals ${result}`)
    number2++;
}while(number2<=10){}