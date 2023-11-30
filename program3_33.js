//Reverse number generator like 123 to 321;
const prompt = require("prompt-sync")();


let number  = prompt("please enter a three digit number(like 123): ");


let n1 = Math.floor(number / 100);
number = number % 100;

let n2 = Math.floor(number / 10);
number = number % 10;

// number = number / 100;






console.log(" Reverse number: " + number+n2+n1);
