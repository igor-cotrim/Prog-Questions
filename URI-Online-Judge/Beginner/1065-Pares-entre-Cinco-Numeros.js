/**
 * Pares entre Cinco Números
 * 
Faça um programa que leia 5 valores inteiros. Conte quantos destes 
valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de 
valores pares lidos.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const pares = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  const num = Number(lines.shift());
	
  if (num % 2 === 0) {
    pares.push(num);
    soma += num;
  }
}

console.log(pares.length + " valores pares");