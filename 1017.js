var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const tempoGasto = parseInt(lines.shift());
const velocidadeMedia = parseInt(lines.shift());

const distanciaPecorrida = tempoGasto * velocidadeMedia;
const qntLitros = distanciaPecorrida / 12;

console.log(qntLitros.toFixed(3));