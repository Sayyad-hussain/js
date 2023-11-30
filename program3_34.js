//write a program that will prompt the user to enter number of hours. it computes and display the number of weeks
// days
// and hours within th input number of hours.
const prompt = require('prompt-sync')();

let hours = prompt("Enter number of hours: ");

let week  = Math.floor(hours / 168);
hours = hours % 168;

let days = Math.floor(hours / 24);
hours = hours % 24;

console.log("Week: " + week + " Day: " + days + " Hours: " + hours);
