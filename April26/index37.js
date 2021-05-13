var average = 6;
var studentAverage = 4;

let pass = (studentAverage >= average);
let missingPass = (average - studentAverage);

console.log(`This student has a greater or equal average required to pass: `, pass );
console.log(`This student is missing ${missingPass} to pass`);