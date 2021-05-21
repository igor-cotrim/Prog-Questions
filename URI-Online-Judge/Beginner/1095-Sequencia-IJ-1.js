/**
 * Sequencia IJ 1
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

let i = 1;
let j = 60;

while(j >= 0){
  console.log("I=" + i + " J=" + j);
  i += 3;
  j -= 5;
}