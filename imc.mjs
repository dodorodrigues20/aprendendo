
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});                 
var peso = await rl.question ('peso')
var altura = await rl.question ('altura')
peso = parseFloat (peso)
altura = parseFloat (altura)
var imc = peso / (altura * altura)
console.log(imc)

if (imc <20){
    
    console.log('abaixo do peso')
}
else if (imc >20 && imc <=25 ){
    
    console.log('peso normal')
}
else if (imc >25 && imc <=30 ){
      
    console.log ('sobre peso')
}
else if (imc >30 && imc <=40) {
     
    console.log('Obeso')
}
else {
     
    console.log('Obeso morbida')

}

await rl.close()