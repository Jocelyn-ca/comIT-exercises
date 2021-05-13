/*
Create a new index45.js file
Define a playerName variable with the following value: Darian Durant is lame
Define a teams variable with the following value: BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers
Define a message variable with the following value: Regina is the best Canadian city, Go Riders
Use the slice method to get the following words or phrases from the previous variables:
Daran Durant is
riders
the best
, Go
Use a template variable to create the final result
Change the first riders character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: DARIAN DURANT is the best Riders player, Go Riders!!
*/

var playerName = 'Darian Durant is lame';
var team ='BC Lions, Calgary Stampeders, Edmonton Eskimos,Saskatchewan Roughriders & Winnipeg Blue Bombers';
var message = 'Regina is the best Canadian city, Go Riders';
const playerSl= playerName.slice(0,16)
const teamSl = team.slice(65,71);
const messageSl = message.slice(10,18);
const messageSl1 = message.slice(32,36);
const message1 = 'player ';
 
console.log(playerSl.toUpperCase() + ` ` + messageSl + ` ` + teamSl + ' ' +message1 + messageSl1 +' ' + 'Riders !!')
