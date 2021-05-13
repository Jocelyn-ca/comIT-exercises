// Create a new index90.js file
// Copy and paste the code from exercise 80
// Refactor the code to use for instead of do/while
// Create a new index70.js file
// Use while structure to only sum odd numbers between 0 and 1000
// Show the partial result as output too
// var number=0;
// var sum=0;
// while(number<=1000){
//     if(number%2!==0){
//         sum+=number;
//         console.log(sum);
//     }
//     number++;
// }

var sum=0;
for(number=0;number<=1000;number++){
    if(number%2!==0){
        sum=sum+number;
        console.log(sum);
    }
}