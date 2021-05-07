/**
 * Conversão de Tempo
 * 
  Leia um valor inteiro, que é o tempo de duração em segundos de um 
  determinado evento em uma fábrica, e informe-o expresso no formato 
  horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:
minutos:segundos, conforme exemplo fornecido.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

const qntHoras = parseInt(N / 3600);
N = N % 3600

const qntMin = parseInt(N / 60);
N = N % 60

const qntSegs = N

console.log(qntHoras + ":" + qntMin + ":" + qntSegs)