var inCome,revenue,taxes;
inCome = 1000;
revenue = 600;
taxes = 500;

let inComeResult = (inCome >= 800);
let revenueResult = (revenue == 600);
let taxesResult = (taxes < 400);
console.log(`Income Objective: ` + inComeResult);
console.log(`Taxes Objective: `+ taxesResult);
console.log(`Revenue Objective: `+ revenueResult);
