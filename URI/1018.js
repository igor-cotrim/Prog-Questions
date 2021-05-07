var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
console.log(N)

const qtdNotas100 = parseInt(N / 100)
N = N % 100
const qtdNotas50 = parseInt(N / 50)
N = N % 50
const qtdNotas20 = parseInt(N / 20)
N = N % 20
const qtdNotas10 = parseInt(N / 10)
N = N % 10
const qtdNotas5 = parseInt(N / 5)
N = N % 5
const qtdNotas2 = parseInt(N / 2)
N = N % 2
const qtdNotas1 = parseInt(N / 1)
N = N % 1

console.log(`${qtdNotas100} nota(s) de R$ ${100},00`)
console.log(`${qtdNotas50} nota(s) de R$ ${50},00`)
console.log(`${qtdNotas20} nota(s) de R$ ${20},00`)
console.log(`${qtdNotas10} nota(s) de R$ ${10},00`)
console.log(`${qtdNotas5} nota(s) de R$ ${5},00`)
console.log(`${qtdNotas2} nota(s) de R$ ${2},00`)
console.log(`${qtdNotas1} nota(s) de R$ ${1},00`)


// Feito com um for, reduzindo muito codigo

// const notas = [100,50,20,10,5,2,1]

// console.log(N)

// for (let nota of notas){
//   let qtdNotas = parseInt(N / nota);
//   console.log(`${qtdNotas} nota(s) de R$ ${nota},00`)
//   N = N % nota
// }