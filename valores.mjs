
import readline from 'readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var a = await rl.question('primeiro')
var b = await rl.question('segundo')
var c = await rl.question('terceiro')
if ( a > b  ){
    console.log(a)
}
else if (b > c ){
    console.log(b)
}
else {
    console.log(c)

}
rl.console