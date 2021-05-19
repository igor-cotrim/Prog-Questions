/**
 * Intervalo 2
 * 
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X 
que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos 
estão fora do intervalo, mostrando essas informações.

Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica 
o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

Saída
Para cada caso, imprima quantos números estão dentro (in) e quantos valores 
estão fora (out) do intervalo.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());
let In = 0;
let Out = 0;

for(let i = 0; i < N; i++){
  let X = parseInt(lines.shift());
  if(X >= 10 && X <= 20) {
    In++;
  } else {
    Out++;
  }

}

console.log(In + " in");
console.log(Out + " out");