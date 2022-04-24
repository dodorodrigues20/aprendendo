
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var inteiro = await rl.question ("digite um numero:");
inteiro = parseInt (inteiro, 10 )
console.log(inteiro) 
if (inteiro ==1 ){
    console.log("domingo");
}
else if (inteiro ==2){
    console.log("segunda")
}
else if (inteiro ==3){
    console.log("terça")
}

else {
    console.log ("não tem dia da senama com esse numero");
}
await rl.close()