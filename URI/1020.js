var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let idade = parseInt(lines.shift());

const qntAno = parseInt(idade / 365);
idade = idade % 365;

const qntMes = parseInt(idade / 30);
idade = idade % 30;

const qntDia = idade;

console.log(qntAno + " ano(s)");
console.log(qntMes + " mes(es)");
console.log(qntDia + " dia(s)");