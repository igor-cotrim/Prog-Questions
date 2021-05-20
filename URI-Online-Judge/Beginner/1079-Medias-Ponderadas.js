/**
 * Médias Ponderadas
 * 
Leia 1 valor inteiro N, que representa o número de casos de teste que 
vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um 
deles com uma casa decimal. Apresente a média ponderada para cada um 
destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, 
o segundo valor tem peso 3 e o terceiro valor tem peso 5.

Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. 
Cada N linha a seguir contém um caso de teste com três valores com 
uma casa decimal cada valor.

Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, 
conforme exemplo abaixo.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());
let pesoA = 2;
let pesoB = 3;
let pesoC = 5;
let pesoTotal = 10;

for(let i = 0; i < N; i++){
  let [A, B, C] = lines.shift().split(" ").map((item) => parseFloat(item));
  const media = ((A * pesoA) + (B * pesoB) + (C * pesoC)) / pesoTotal;
  console.log(media.toFixed(1));
  A++;
  B++;
  C++;
}