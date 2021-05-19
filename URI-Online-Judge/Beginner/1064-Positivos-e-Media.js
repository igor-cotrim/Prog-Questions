/**
 * Positivos e Média
 * 
Leia 6 valores. Em seguida, mostre quantos destes valores digitados 
foram positivos. Na próxima linha, deve-se mostrar a média de todos os 
valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto 
flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima 
linha deve mostrar a média dos valores positivos digitados.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const positivos = [];
let soma = 0;

for (let i = 0; i < 6; i++) {
  const num = Number(lines.shift());
	
  if (num >= 0) {
    positivos.push(num);
    soma += num;
  }
}

const media  = soma / positivos.length;

console.log(positivos.length + " valores positivos");
console.log(media.toFixed(1));