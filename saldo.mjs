
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var saldo = await rl.question("seu saldo:")
console.log(saldo)
saldo = parseInt (saldo, 10)
if (saldo  <=0 || saldo <=500 ){
    console.log('nenhum cresdito!')
}
else if(saldo >=501 || saldo <=1000 ){
    var pocentagem = 0.3 * saldo
    console.log ("seu credito é", pocentagem) 

}
else if(saldo >=1001 || saldo <=3000){
    var pocentagem = 0.4 * saldo 
    console.log ("seu credito é", pocentagem)
}
else {
    var pocentagem = 0.5 * saldo 
console.log("seu credito é", pocentagem)
}

await rl.close()