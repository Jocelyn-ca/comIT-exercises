
// Create a new index48.js file
// Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
// Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
// Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
// Declare a result value and assign the result of adding pi and answerToLife values
// Show the result variable value and name as output (use console.log(variable name, variable value))
// Show the following output: 45.14 is the result of adding pi and answerToLife
// Concatenate the strings and transform 45.14 (result value) from number to string using toString method

var message="3.14 it's a great number but 42 it's the answer to life.";
var pi=message.substr(0,4);
const numberPi=parseFloat(pi);
var answerToLife=message.substr(29,2);
const answerToLifeS=parseInt(answerToLife);
var result=numberPi + answerToLifeS;
console.log('Result: ',result);
console.log(result.toString());
console.log(typeof result.toString());