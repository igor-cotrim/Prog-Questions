var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines.shift()); 

const minutos = (A * 60) / 30;

console.log(minutos + " minutos");