
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var valor = await rl.question ('valor')
parseInt(valor,10)

if ( valor % 2 ==1 ){
    console.log('impar')
}
else{
    console.log('par')
}

await rl.close()