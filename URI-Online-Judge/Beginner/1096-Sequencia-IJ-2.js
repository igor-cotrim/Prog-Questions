/**
 * Sequencia IJ 2
 * 
Você deve fazer um programa que apresente a sequencia conforme o 
exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

for(let i = 1; i <= 9; i+=2){
  for(let j = 7; j >= 5; j--){
    console.log("I=" + i + " J=" + j);
  }
}
