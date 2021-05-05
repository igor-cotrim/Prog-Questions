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