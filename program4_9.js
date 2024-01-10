const prompt = require('prompt-sync')();


let char = prompt("please enter your character: ");

char = char.toLowerCase();
if ( char == "a" || char == "e" || char == "i"|| char == "o" || char == "u")
{
    console.log("Vowel character.");
}
else
{
    console.log("You did not enter a Vowel character.");
}