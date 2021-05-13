
// Create a new index93.js file
// Copy and paste the code from exercise 83
// Refactor the code to use for instead of do/while
// Create a new index73.js file
// Show the following output using while:
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

// var asterisk='*************';
// var i=13;
// var result;
// while(i>=1){
//     result=asterisk.substr(0,i)
//     console.log(result);
//     i--;
// }

var asterisk="*************";
var result;
for(i=13;i>=1;i--){
    result=asterisk.substr(0,i);
    console.log(result);
}