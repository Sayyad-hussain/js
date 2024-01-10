const prompt = require("prompt-sync")();

let marks = parseInt(prompt("please enter your marks: "));

 if(marks>0 && marks<=49)
 {
    console.log("Your Grade is F. ");
 }
 else if(marks>=50 && marks<=59)
 {
    console.log("Your Grade is D. ");
 }
 else if(marks>=60 && marks<=69)
 {
    console.log("Your Grade is C. ");
 }
 else if(marks>=70 && marks<=79)
 {
    console.log("Your Grade is B. ");
 }
 else if(marks>=80 && marks<=100)
 {
    console.log("Your Grade is A. ");
 }
 