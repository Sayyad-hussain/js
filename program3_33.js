//Reverse number generator
let n = 5220938;

let a = Math.floor(n / 1000000);
n = n % 1000000;

let b = Math.floor(n / 100000);
n = n % 100000;

let c = Math.floor(n / 10000);
n = n % 10000;

let d = Math.floor(n / 1000);
n = n % 1000;

let e = Math.floor(n / 100);
n = n % 100;

let f = Math.floor(n / 10);
n = n % 10;

console.log("Reverse number: "+n+f+e+d+c+b+a);
