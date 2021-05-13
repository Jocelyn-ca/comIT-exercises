// reate a new index75.js file
// Write a program that will show the first 10 Fibonacci sequence numbers
// var number1=0;
// var number2=1;
// var result=0;
// while(result<10){
//     console.log(number1);
//     number1=number1+number2;
//     number2=number2+number1;
// }



var n1 = 1, n2 = 1;
var index = 0;
while(index <10){
    console.log(n1);
    var temp = n2;
    n2 = n1+ n2;
    n1 = temp;
    index++;
}