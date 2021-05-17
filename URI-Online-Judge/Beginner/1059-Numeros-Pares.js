/**
 * Números Pares
 * 
  Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, 
um em cada linha.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for (let num = 2; num <= 100; num+= 2) {
  console.log(num);
}