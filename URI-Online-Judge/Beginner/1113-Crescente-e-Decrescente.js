/**
 * Crescente e Decrescente
 * 
Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. 
Escreva para cada X e Y uma mensagem que indique se estes valores foram 
digitados em ordem crescente ou decrescente.

Entrada
A entrada contém vários casos de teste. Cada caso contém dois valores
 inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores 
 iguais para X e Y.

Saída
Para cada caso de teste imprima “Crescente”, caso os valores tenham sido 
digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let sair = false;

while(!sair){
  const [x, y] = lines.shift().split(" ").map((item) => parseInt(item));

  if(x === y){
    sair = true;
    break;
  } else if(x > y){
    console.log("Decrescente")
  } else if(y > x){
    console.log("Crescente")
  }
}