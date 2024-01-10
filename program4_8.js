const prompt = require('prompt-sync')();
// const prompt = require('prompt-sync')();

let salary = parseInt(prompt("please enter your salary: "));
let grade = parseInt(prompt("please enter your grade: "));

if(grade > 15)
{
    salary = salary + (salary / 100)*50;
}
else if(grade > 0 && grade<=15)
{
    salary = salary + (salary / 100)*25;
}
console.log("Your salary with bonus is " + salary);