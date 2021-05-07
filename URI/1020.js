/**
 * Idade em Dias
 * 
  Leia um valor inteiro correspondente à idade de uma pessoa em dias 
  e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e 
todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que 
permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas 
um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let idade = parseInt(lines.shift());

const qntAno = parseInt(idade / 365);
idade = idade % 365;

const qntMes = parseInt(idade / 30);
idade = idade % 30;

const qntDia = idade;

console.log(qntAno + " ano(s)");
console.log(qntMes + " mes(es)");
console.log(qntDia + " dia(s)");