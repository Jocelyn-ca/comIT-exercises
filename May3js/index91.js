// Create a new index91.js file
// Copy and paste the code from exercise 81
// Refactor the code to use for instead of do/while
// Create a new index71.js file
// Show the 9 times table from 1 to 10 using while (example 9 times 1 equals 1)


// var number1=9;
// var number2=1;
// var result='';
// while(number2<=10){
//     result=number1*number2;
//     console.log(`${number1} times ${number2} equals ${result}`)
//     number2++;
// }

var result=0;
var number1=9;
for(number2=1;number2<=10;number2++){
    result=number1*number2;
    console.log(`${number1} times ${number2} equals ${result}`)
}