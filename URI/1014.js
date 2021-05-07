var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const X = parseInt(lines.shift()); 
const Y = parseFloat(lines.shift()); 

const consumoMedio = X / Y

console.log(consumoMedio.toFixed(3) + " km/l")