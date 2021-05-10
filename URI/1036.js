/**
 * Fórmula de Bhaskara
 * 
  Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da 
  equação de Bhaskara. Se não for possível calcular as raízes, mostre 
  a mensagem correspondente “Impossivel calcular”, caso haja uma divisão 
  por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem 
"Impossivel calcular". Caso contrário, imprima o resultado das raízes com 
5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo 
abaixo. Imprima sempre o final de linha após cada mensagem.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map(item => parseFloat(item));

let delta = Math.pow(B, 2) - 4 * A * C;

if (delta < 0 || A === 0){
  console.log("Impossivel calcular");
  return;
} else {
  const R1 = (-B + Math.sqrt(delta)) / (2 * A);  
  const R2 = (-B - Math.sqrt(delta)) / (2 * A);

  console.log("R1 = " + R1.toFixed(5));
  console.log("R2 = " + R2.toFixed(5));
}