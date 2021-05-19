/**
 * Números Ímpares
 * 
Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 
1 até X, um valor por linha, inclusive o X, se for o caso.

Entrada
O arquivo de entrada contém 1 valor inteiro qualquer.

Saída
Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const x = Number(lines.shift());

for (let i = 1; i <= x; i++) {
  if(i % 2 !== 0){
    console.log(i);
  }
}