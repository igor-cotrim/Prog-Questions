/**
 * Lanche
 * 
  Com base na tabela abaixo, escreva um programa que leia o código de um item e 
  a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e 
à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a 
ser pago, com 2 casas após o ponto decimal.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [A, B] = lines.shift().split(" ").map(item => parseInt(item));
const preco1 = 4.00
const preco2 = 4.50
const preco3 = 5.00
const preco4 = 2.00
const preco5 = 1.50

if (A === 1){
  total = B * preco1
} else if (A === 2){
  total = B * preco2
} else if (A === 3){
  total = B * preco3
} else if (A === 4){
  total = B * preco4
} else if (A === 5){
  total = B * preco5
} 

console.log("Total: R$ " + total.toFixed(2))