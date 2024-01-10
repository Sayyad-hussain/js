//write a program that inputs two number and finds weather these numbers are equal or not
//using if-else structure.
const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));

if(a==b)
{
    console.log("Both number are same");
}
else
{
    console.log("Both number are different");
}
