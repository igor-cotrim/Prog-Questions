/**
 * O Maior
 * 
  Faça um programa que leia três valores e apresente o maior dos três valores 
  lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). 
Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = lines.shift().split(" ").map(item => parseInt(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorNum = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(maiorNum + " eh o maior");