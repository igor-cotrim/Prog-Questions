/**
 * Seis Números Ímpares
 * 
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares 
consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

Entrada
A entrada será um valor inteiro positivo.

Saída
A saída será uma sequência de seis números ímpares.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());
let cont = 0;

while (cont < 6) {
  if (x % 2 !== 0) {
      console.log(x);
      cont++;
  }
  x++;
}