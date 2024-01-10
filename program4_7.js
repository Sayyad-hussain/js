const prompt = require("prompt-sync")();

let number = parseInt(prompt("Please enter a number: "));

if(number>10){
    number = number * number;
}
else{
    number = number * number * number;
}

console.log("The number is: " + number);