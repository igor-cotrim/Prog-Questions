/**
 * Tempo de Jogo
 * 
  Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração 
  do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, 
  tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e 
a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [HInicial, HFinal] = lines.shift().split(" ").map((item) => parseInt(item));

if (HInicial > HFinal){
  console.log('O JOGO DUROU ' + (24 - (HInicial - HFinal)) + ' HORA(S)');
} else if (HFinal > HInicial) {
  console.log('O JOGO DUROU ' + (HFinal - HInicial) + ' HORA(S)');
} else {
  console.log('O JOGO DUROU 24 HORA(S)');
}