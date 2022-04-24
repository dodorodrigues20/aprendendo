
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var prato      = await rl.question('prato')
var sobremessa = await rl.question('sobremessa')
var bebidas    = await rl.question('bebidas')
prato = parseInt(prato, 10)
sobremessa = parseInt(sobremessa, 10)
bebidas = parseInt(bebidas, 10)
   
if (vegetariano ==1){
    calorias = 180
    console.log('calorias é',calorias)
}
else if (peixe ==2){
    calorias = 230
    console.log('calorias é',calorias)
}

else if (frango ==3) {
    calorias = 250
    console.log('calorias é',calorias)
}
else{
    calorias = 350
    console.log('calorias é',calorias)
}

if (abacaxi ==1){
    calorias = 75 
    console.log('calorias é', calorias)
}
else if (sorvete ==2){
    calorias = 110
    console.log('calorias é',calorias)
}    
else if (mouse ==3)  {
    calorias = 170
    console.log('calorias é',calorias)
}
else {
    calorias = 200
    console.log ('calorias é',calorias)
}   

if (cha ==1){
    calorias = 20
    console.log('calorias é',calorias)
}
else if (laranja ==2){
    calorias = 70
    console.log('calorias é',calorias)
}    
else if (melao ==3) {
    calorias = 100
    console.log('calorias é',calorias)
}    
else{
    calorias = 75
    console.log('calorias é',calorias)
}    

await rl.close