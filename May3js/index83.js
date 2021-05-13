// Create a new index83.js file
// Copy and paste the code from exercise 73
// Refactor the code to use do/while instead of while

var asterisk='*************';
var i=13;
var result;
do {
    result=asterisk.substr(0,i)
    console.log(result);
    i--;
}while(i>=1){}