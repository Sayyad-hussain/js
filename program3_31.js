//write a program that reads radius form the user and calculate area and circumference using the formula 
//AREA = PI * R^2
const prompt = require("prompt-sync")();

let radius = parseFloat(prompt("please enter radius: "));
const pi = 3.141;
let area = pi  * (radius * radius);

let circumference = 2 * pi * radius;

console.log("Area: " + area);
console.log("Circumference: " + circumference);