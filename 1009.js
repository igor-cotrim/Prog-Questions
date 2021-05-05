var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = (lines.shift()); 
var B = parseFloat(lines.shift()); 
var C = parseFloat(lines.shift());

var total = B + (C * 0.15)

console.log("TOTAL = R$ " + total.toFixed(2))