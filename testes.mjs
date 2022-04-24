import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var peso = await rl.question ('peso')
var altura = await rl.question ('altura')
var imc = peso / (altura * altura) 
console.log (imc)
