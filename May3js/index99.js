// Create a new index99.js file
// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output
var sum=0;
var count=20;
for(n=0;n<=1000;n++){
    if(n%2==0){
    sum=sum+n;    
    count--;
    }
    
    if(count==0){
        break;
    }
}
console.log(sum); 

