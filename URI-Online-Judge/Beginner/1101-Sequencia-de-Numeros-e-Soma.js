/**
 * Sequência de Números e Soma
 * 
Leia um conjunto não determinado de pares de valores M e N 
(parar quando algum dos valores for menor ou igual a zero). 
Para cada par lido, mostre a sequência do menor até o maior e 
a soma dos inteiros consecutivos entre eles (incluindo o N e M).

Entrada
O arquivo de entrada contém um número não determinado de valores M e N. 
A última linha de entrada vai conter um número nulo ou negativo.

Saída
Para cada dupla de valores, imprima a sequência do menor até o maior e a soma 
deles, conforme exemplo abaixo.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let sair = false;

while(!sair){
  const [m, n] = lines.shift().split(" ").map((item) => parseInt(item));

  if(m <= 0 || n <= 0){
    sair = true;
    break;
  }

  let [min, max] = m > n ? [n, m]  : [m, n]

  let soma = 0;
  let string = "";

  for(; min <= max; min++){
    soma += min;
    string += !string.length ? min : " " + min;
  }

  console.log(string + " Sum=" + soma)
}