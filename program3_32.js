const prompt = require('prompt-sync')();

const vi = parseFloat(prompt('Enter initial velocity (vi): '));
const a = parseFloat(prompt('Enter acceleration (a): '));
const t = parseFloat(prompt('Enter time (t): '));

const vf = vi + (a * t);

console.log("Final velocity: " + vf);





