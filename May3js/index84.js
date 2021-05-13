// Create a new index84.js file
// Copy and paste the code from exercise 74
// Refactor the code to use do/while instead of whileå

var asterisk='*************';
var i=1;
var result;
 do {
    result=asterisk.substr(0,i)
    console.log(result);
    i++;
    if(i%2==0){
      i++;
      }
}while(i<=14)