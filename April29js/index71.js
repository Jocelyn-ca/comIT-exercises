// Create a new index71.js file
// Show the 9 times table from 1 to 10 using while (example 9 times 1 equals 1)


var number1=9;
var number2=1;
var result='';
while(number2<=10){
    result=number1*number2;
    console.log(`${number1} times ${number2} equals ${result}`)
    number2++;
}

// var number1=1;
// var number2=1;
// var times=1;
// while(number1<=10){
//     if(number2<number1){
//         times=number1*number2;
//         console.log(number1+'*'+number2 +'=' + times);
//         number2++;
//     }if(number2==number1){
//         times=number1*number2;
//         console.log(number1+'*'+number2 +'=' + times);
//         number2=1;
//         number1++;
//     }
// }