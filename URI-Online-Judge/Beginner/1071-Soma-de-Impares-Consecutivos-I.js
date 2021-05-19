/**
 * Soma de Impares Consecutivos I
 * 
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos 
números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores 
ímpares que estão entre os valores fornecidos na entrada que deverá caber 
em um inteiro.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());
let soma = 0

if(x < y){
  for(let i = x + 1; i < y; i++){
    if(i % 2 !== 0){
      soma += i;
    }
  }
} else {
  for(let i = y + 1; i < x; i++){
    if(i % 2 !== 0){
      soma+= i;
    }
  }
  console.log(soma)
}