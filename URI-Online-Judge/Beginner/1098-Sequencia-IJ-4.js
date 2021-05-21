/**
 * Sequencia IJ 4
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

for(let i = 0; i <= 2; i+= 0.2){
  i = parseFloat(i.toFixed(1))

  for(let j = i + 1; j <= i + 3; j++){
    console.log("I=" + i + " J=" + j);
  }
}
