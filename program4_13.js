const prompt = require("prompt-sync")();

let ch = prompt("Please enter a letter: ");

if(ch>="a" && ch<="z")
{
    console.log(`${ch} is a Lower Case letter. `);
}
else if(ch>="A" && ch<="Z")
{
    console.log(`${ch} is a Upper Case letter. `);
}
else{
    console.log("Invalid entry !!! ");
}