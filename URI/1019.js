var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

const qntHoras = parseInt(N / 3600);
N = N % 3600

const qntMin = parseInt(N / 60);
N = N % 60

const qntSegs = N

console.log(qntHoras + ":" + qntMin + ":" + qntSegs)