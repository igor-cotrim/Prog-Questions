/**
 * Área
 * 
  Escreva um programa que leia três valores com ponto flutuante de dupla precisão: 
  A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a 
uma das áreas descritas acima, sempre com mensagem correspondente e um espaço 
entre os dois pontos e o valor. O valor calculado deve ser apresentado com 
3 dígitos após o ponto decimal.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var Valores = lines.shift().split(" "); 

var A = parseFloat(Valores.shift());
var B = parseFloat(Valores.shift());
var C = parseFloat(Valores.shift());
var pi = 3.14159

var areaDoTriangulo = (A * C) / 2
var areaDoCirculo = pi * Math.pow(C, 2)
var areaDoTrapezio = ((A + B) * C) / 2
var areaDoQuadrado = Math.pow(B, 2)
var areaDoRetangulo = A * B


console.log("TRIANGULO: " + areaDoTriangulo.toFixed(3))
console.log("CIRCULO: " + areaDoCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaDoTrapezio.toFixed(3))
console.log("QUADRADO: " + areaDoQuadrado.toFixed(3))
console.log("RETANGULO: " + areaDoRetangulo.toFixed(3))