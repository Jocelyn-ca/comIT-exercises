// Create a new index61.js file
// Define weekdayNumber and assign a numeric value between 1 and 7
// If weekday number is 1 show the following message: Today it's Monday
// If weekday number is 2 show the following message: Today it's Tuesday
// If weekday number is 3 show the following message: Today it's Wednesday
// If weekday number is 4 show the following message: Today it's Thursday
// If weekday number is 5 show the following message: Today it's Friday
// If weekday number is 6 show the following message: Today it's Saturday
// If weekday number is 7 show the following message: Today it's Sunday
// If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7

var weekdayNumber = 6;
let message ="";
switch(weekdayNumber){
    case 1:
       message="Today it's Monday";
       break;
    case 2:
        message="Today it's Tuesday";
        break;
    case 3:
        message="Today it's Wednesday";
        break;
    case 4:
        message="Today it's Thursday";
        break;
    case 5:
        message="Today it's Friday";
        break;
    case 6:
        message="Today it's Saturday";
        break;
    case 7:
        message="Today it's Sunday";
        default:
        message="Error: Please input a number bettwen 1 and 7.";
    }
    console.log(message);