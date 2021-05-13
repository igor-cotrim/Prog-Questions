/**
 * Triângulo
 * 
  Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um 
  triângulo. Em caso positivo, calcule o perímetro do triângulo e 
  apresente a mensagem:

Perimetro = XX.X

Em caso negativo, calcule a área do trapézio que tem A e B como base e C 
como altura, mostrando a mensagem

Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [A, B, C] = lines.shift().split(" ").map((item) => parseFloat(item));
let maior;
let soma;
let triangulo;

if (A > B && A > C){
  maior = A;
} else if (B > C){
  maior = B;
} else{
  maior = C;
} 

if (maior === A){
  soma = B + C;
} else if (maior === B){
  soma = A + C;
} else{
  soma = B + A;
} 

(soma > maior) 
  ? triangulo = true
  : triangulo = false;
// if (soma > maior){
//   triangulo = true;
// } else{
//   triangulo = false;
// } 

if (triangulo) {
    let perimetro = A + B + C;
    console.log('Perimetro = ' + perimetro.toFixed(1));
} else {
    let areaTrapezio = ((A + B) * C) / 2;
    console.log('Area = ' + areaTrapezio.toFixed(1));
}
