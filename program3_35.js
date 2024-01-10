// This program enter time in seconds and convert the time into years , months , weeks etc
const prompt = require('prompt-sync')();

let minutes 
let seconds 
let hours 
let days
let years 
let months 
let weeks 


seconds  = prompt("Plese enter number of seconds: ");

console.log("*******************************************************");

console.log("Total seconds you enter: " + seconds);

years = Math.floor(seconds / 29030400);
seconds = seconds % 29030400;

months = Math.floor(seconds / 2419200);
seconds = seconds % 2419200;

weeks = Math.floor(seconds / 604800);
seconds = seconds % 604800;

days = Math.floor(seconds / 86400);
seconds = seconds % 86400;

hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;

minutes = Math.floor(seconds / 60);
seconds = seconds % 60; 


console.log("Years: " + years );
console.log("Months: " + months );
console.log("Weeks: " + weeks );
console.log("Days: " + days );
console.log("Hours: " + hours );
console.log("Minutes: " + minutes);
console.log("Seconds: " + seconds);

console.log("*******************************************************");


