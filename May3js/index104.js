
// Create a new index104.js file
// Define a fibonacci variable and assign a function value
// When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
// Execute this function 3 times

var fibonacci = function(){
    var n1=0,n2=1;
    var temp;
for(i=0;i<10;i++){
    console.log(n1);
    temp=n2;
    n2=n1+n2;
    n1=temp;
}
}
fibonacci();
fibonacci();
fibonacci();