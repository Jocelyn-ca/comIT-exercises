// Create a new index95.js file
// Copy and paste the code from exercise 85
// Refactor the code to use for instead of do/while
// reate a new index75.js file
// Write a program that will show the first 10 Fibonacci sequence numbers

// var n1 = 1, n2 = 1;
// var i = 0;
// while(i <10){
//     console.log(n1);
//     var temp = n2;
//     n2 = n1+ n2;
//     n1 = temp;
//     i++;
// }

var n1=1,n2=1;
var temp;
for(i=0;i<10;i++){
    console.log(n1);
    temp=n2;
    n2=n1+n2;
    n1=temp;
}