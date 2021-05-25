/**
 * Dividindo X por Y
 * 
Escreva um algoritmo que leia 2 números e imprima o resultado da 
divisão do primeiro pelo segundo. Caso não for possível mostre 
a mensagem “divisao impossivel” para os valores em questão.

Entrada
A entrada contém um número inteiro N. Este N será a quantidade 
de pares de valores inteiros (X e Y) que serão lidos em seguida.

Saída
Para cada caso mostre o resultado da divisão com um dígito após 
o ponto decimal, ou “divisao impossivel” caso não seja possível 
efetuar o cálculo.

Obs.: Cuide que a divisão entre dois inteiros em algumas linguagens 
como o C e C++ gera outro inteiro. Utilize cast :)
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());

for(let i = 0; i < N; i++){
  const [x, y] = lines.shift().split(" ").map((item) => parseInt(item));

  if(y === 0){
    console.log("divisao impossivel")
  } else {
    divisao = (x / y).toFixed(1)
    console.log(divisao)
  }
}