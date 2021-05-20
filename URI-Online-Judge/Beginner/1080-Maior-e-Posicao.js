/**
 * Maior e Posição
 * 
Leia 100 valores inteiros. Apresente então o maior valor lido e a 
posição dentre os 100 valores lidos.

Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let maior = 0;
let posicao = 0;

for (let i = 1; i <= 100; i++) {
    const num = parseInt(lines.shift());
    if (num > maior) {
        maior = num;
        posicao = i;
    }
}

console.log(maior);
console.log(posicao);