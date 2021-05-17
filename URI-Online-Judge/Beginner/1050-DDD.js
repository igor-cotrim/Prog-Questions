/**
 * DDD
 * 
  Leia um número inteiro que representa um código de DDD para discagem interurbana. 
  Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, 
o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. 
Imprima DDD nao cadastrado caso não existir DDD correspondente ao número 
digitado.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let DDD = parseInt(lines.shift());

if(DDD === 61){
  console.log("Brasilia");
} else if(DDD === 71){
  console.log("Salvador");
} else if(DDD === 11){
  console.log("Sao Paulo");
} else if(DDD === 21){
  console.log("Rio de Janeiro");
} else if(DDD === 32){
  console.log("Juiz de Fora");
} else if(DDD === 19){
  console.log("Campinas");
} else if(DDD === 27){
  console.log("Vitoria");
} else if(DDD === 31){
  console.log("Belo Horizonte");
} else {
  console.log("DDD nao cadastrado");
}