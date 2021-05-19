/**
 * Pares, Ímpares, Positivos e Negativos
 * 
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, 
quantos valores digitados foram ímpares, quantos valores digitados 
foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, 
não esquecendo o final de linha após cada uma.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const pares = [];
const impares = [];
const positivos = [];
const negativos = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  const num = Number(lines.shift());
	
  if (num % 2 === 0) {
    pares.push(num);
    soma += num;
  } else {
    impares.push(num);
    soma += num;
  }

  if (num > 0) {
    positivos.push(num);
    soma += num;
  }

  if (num < 0) {
    negativos.push(num);
    soma += num;
  }
}


console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");