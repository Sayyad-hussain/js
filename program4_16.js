const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a value: ', (userInput) => {
  console.log('You entered:', userInput);
  rl.close();
});
