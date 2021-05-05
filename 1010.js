var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift().split(" "); 
var B = lines.shift().split(" "); 

var idItem1 = parseInt(A.shift());
var qtdItem1 = parseInt(A.shift());
var valorUnitarioItem1 = parseFloat(A.shift());

var idItem2 = parseInt(B.shift());
var qtdItem2 = parseInt(B.shift());
var valorUnitarioItem2 = parseFloat(B.shift());

var valor = (qtdItem1 * valorUnitarioItem1) + (qtdItem2 * valorUnitarioItem2)

console.log("VALOR A PAGAR: R$ " + valor.toFixed(2))