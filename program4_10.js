const prompt = require("prompt-sync")();

let n = parseInt(prompt("please enter a number: "));

if(n==0){
    console.log("The number is zero. ");
}
else if(n<0)
{
    console.log("The number is negative. ");
}
else{
    console.log("The number is positive. ");
}