const prompt = require("prompt-sync")();

let basicPay = parseInt(prompt("Please enter your basic pay: "));

if(basicPay<30000)
{
    let houseRent = (basicPay /100)*30;
    let netPay = basicPay + houseRent;
    console.log(`The Net pay of sameer is ${netPay}.`)
}

else if(basicPay>=30000 && basicPay <=50000)
{
    let houseRent = (basicPay /100)*35;
    let netPay = basicPay + houseRent;
    console.log(`The Net pay of sameer is ${netPay}.` )
}
else if(basicPay > 50000)
{
    let houseRent = (basicPay /100)*40;
    let netPay = basicPay + houseRent;
    console.log(`The Net pay of sameer is ${netPay}.`)
}
else
{
     console.log(`Invaid entry, please enter your correct salary`)
}