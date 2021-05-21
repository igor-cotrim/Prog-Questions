/**
 * Sequencia IJ 3
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

for(let i = 1, j = 7; i <= 9  || j <= 13; i += 2, j += 5){
  for(x = 0; x < 3; x++){
    console.log("I=" + i + " J=" + j);
    j--;
  }
}
