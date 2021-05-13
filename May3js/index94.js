// Create a new index94.js file
// Copy and paste the code from exercise 84
// Refactor the code to use for instead of do/while
// Create a new index74.js file
// Show the following output using while:
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// var asterisk='*************';
// var i=0;
// var result;
//  do {
//     result=asterisk.substr(0,i)
//     console.log(result);
//     i++;
//     if(i%2==0){
//       i++;
//       }
// }while(i<=14)

var result;
var asterisk="*************";
for(i=1;i<=14;i++){
    if(i%2!==0){
        result=asterisk.substr(0,i);
        console.log(result);
    }
}