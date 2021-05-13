// Create a new index74.js file
// Show the following output using while:
// *
// ***
// *****
// *******
// *********
// ***********
// *************

var asterisk='*************';
var i=1;
var result;
while(i<=14){
    result=asterisk.substr(0,i)
    console.log(result);
    i++;
    if(i%2==0){
      i++;
      }
}

// var test = '*'
// var j=1
// var res=''
// while(j<14){
//     console.log(test)
//     test += '**'
//     j+=2
// }