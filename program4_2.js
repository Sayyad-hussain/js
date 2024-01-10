//write a program that reads a number and print even or odd
const prompt = require('prompt-sync')();


let a = parseFloat(prompt("Enter a number: "));

if(a%2 == 0)
{
    console.log("EVEN number");
}
else
{
    console.log("ODD number");
}
