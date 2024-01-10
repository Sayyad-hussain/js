//write a program that reads two number and print sum and product if first no is positive.

const prompt = require('prompt-sync')();

// Convert input strings to numbers
let a = parseFloat(prompt('Enter first Number: '));
let b = parseFloat(prompt('Enter second Number: '));

if (a > 0) 
{
    console.log("Sum: " + (a + b));
    console.log("Product: " + (a * b));
}


