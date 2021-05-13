// Create a new index64.js file
// Define the name variable and assign a null value
// If the name variable is truthy then show the following message as output: Your name is %name%
// If the name variable is falsy then show the following message: Please input a valid name
// Now assign your name to the name variable and run the code again
// For yourself try to explain what's going on?

var firstName ='Jinmei';

let result = (firstName!==null) ? `Your name is ${firstName}`:`Please input a valid name`;
console.log(result);

var yourName ='Jinmei';
if(yourName){
    console.log(`Your name is ${yourName}`)
}else{
    console.log(`Please input a valid name`);
}