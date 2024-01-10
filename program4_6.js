const prompt = require("prompt-sync")();

let firstNumber = parseInt(prompt("Please enter a number: "));

let secondNumber = parseInt(prompt("Please enter second number: "));

if(firstNumber==secondNumber){
    console.log("Both numbers a equal.");
}
else{
    console.log("Both number are different.");
}



