/**
 * Tipos de Triângulos
 * 
  Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, 
  de modo que o lado A representa o maior dos 3 lados. A seguir, determine o 
  tipo de triângulo que estes três lados formam, com base nos seguintes casos, 
  sempre escrevendo uma mensagem adequada:

se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: 
TRIANGULO ISOSCELES

Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [A, B, C] = lines.shift().split(" ").map((item) => parseFloat(item));
let aux;

if (B > A && B > C){
  aux = A;
  A = B;
  B = aux;
} else if(C > A){
  aux = A;
  A = C;
  C = aux;
}

if (A >= B + C){
  console.log("NAO FORMA TRIANGULO");
} else {
  if (A * A === (B * B) + (C * C)){
    console.log("TRIANGULO RETANGULO");
  }
  if (A * A > (B * B) + (C * C)){
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (A * A < (B * B) + (C * C)){
    console.log("TRIANGULO ACUTANGULO");
  }
  if (A === B && A === C){
    console.log("TRIANGULO EQUILATERO");
  }
  if ((A === B && A !== C) || (A === C && A !== B) || (B === C && B !== A)){
    console.log("TRIANGULO ISOSCELES");
  }
}
