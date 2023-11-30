// write a js program that reads temperature in fahrenheit and print its equivalent 
// temperature in celsius using formula c = 5/9 * (f-32);


const prompt = require("prompt-sync")();

let fahrenheit = parseFloat( prompt("please enter the temperature in fahrenheit: "));

let celsius = 5/9 * (fahrenheit - 32);

console.log("Temperature in celcius is: " + celsius);

