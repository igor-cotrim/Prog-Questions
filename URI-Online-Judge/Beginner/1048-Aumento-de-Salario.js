/**
 * Aumento de Salário
 * 
  A empresa ABC resolveu conceder um aumento de salários a seus funcionários 
  de acordo com a tabela abaixo:


Salário	                              
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

Percentual de Reajuste
15%
12%
10%
7%
4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como 
o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e 
o percentual de reajuste ganho, conforme exemplo abaixo.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let salario = parseFloat(lines.shift());

if(salario >= 0 && salario <= 400){
  percentual = 15;
} else if(salario > 400 && salario <= 800) {
  percentual = 12;
} else if(salario > 800 && salario <= 1200) {
  percentual = 10;
} else if(salario > 1200 && salario <= 2000) {
  percentual = 7;
} else {
  percentual = 4;
}

const reajuste = salario * (percentual / 100);
const novoSalario = salario + reajuste;

console.log("Novo salario: " + novoSalario.toFixed(2))
console.log("Reajuste ganho: " + reajuste.toFixed(2))
console.log("Em percentual: " + percentual + " %")
