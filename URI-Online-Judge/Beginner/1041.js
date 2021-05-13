/**
 * Coordenadas de um Ponto
 * 
  Leia 2 valores com uma casa decimal (x e y), que devem representar 
  as coordenadas de um ponto em um plano. A seguir, determine qual o 
  quadrante ao qual pertence o ponto, ou se está sobre um dos eixos 
  cartesianos ou na origem (x = y = 0).

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, 
conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [x, y] = lines.shift().split(" ").map((item) => parseFloat(item));

if (x === 0 && y === 0) {
  console.log('Origem');
} else if (x === 0) {
  console.log('Eixo Y');
} else if (y === 0) {
  console.log('Eixo X');
} else if (y > 0 && x > 0) {
  console.log('Q1');
} else if (y > 0 && x < 0) {
  console.log('Q2');
} else if (y < 0 && x < 0) {
  console.log('Q3');
} else if (y < 0 && x > 0) {
  console.log('Q4');
}