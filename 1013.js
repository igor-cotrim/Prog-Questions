var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = lines.shift().split(" ").map(item => parseInt(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorNum = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(maiorNum + " eh o maior");