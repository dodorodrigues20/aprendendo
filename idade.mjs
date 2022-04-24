import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var idade = await rl.question("qual a sua idade:");
idade = parseInt (idade, 10)
console.log("idade")
if(idade <16 ) {
    console.log ("não eleitoral")    
} 
else if((idade >=16 && idade <18)||idade >65){
    console.log ("eleito facultativo")
}
else {
    console.log ("eleitor obrigatorio ")
}

await rl.close()