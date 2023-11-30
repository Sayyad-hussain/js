// write a javascript program that converts a persons height from inches to centimeters 
// using that formula 2.54 * height;

const prompt =  require('prompt-sync')();

let hinches = parseFloat(prompt("Please enter your height in inches: "));

let hcenti = 2.54 * hinches;

console.log("Height in centimeters: "+ hcenti);