const prompt = require('prompt-sync')();

let a = parseInt(prompt("Please enter the first number: "));
let b = parseInt(prompt("Please enter the second number: "));
let c = parseInt(prompt("Please enter the third number: "));

let max = a;

if(b>max)
{
    max = b;
}
if(c>max){
    max = c;
}

console.log("maximum number is " + max);