// Create a new index85.js file
// Copy and paste the code from exercise 75
// Refactor the code to use do/while instead of while
var n1 = 1, n2 = 1;
var index = 0;
do {
    console.log(n1);
    var temp = n2;
    n2 = n1+ n2;
    n1 = temp;
    index ++;
}while(index <10){}