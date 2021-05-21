/**
 * Soma de Ímpares Consecutivos II
 * 
Leia um valor inteiro N que é a quantidade de casos de teste que vem 
a seguir. Cada caso de teste consiste de dois inteiros X e Y. 
Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de 
casos de teste que vem a seguir. Cada caso de teste consiste em uma 
linha contendo dois inteiros X e Y.

Saída
Imprima a soma de todos valores ímpares entre X e Y.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const casos = parseInt(lines.shift());

for(caso = 0; caso < casos; caso++){
  let [A, B] = lines.shift().split(" ").map((item) => parseInt(item));

  if(A === B || A + 1 === B || B + 1 === A){
    console.log("0")
  } else {
    let  soma = 0;

    let [numA, numB] = A > B ?  [A, B + 1]  : [B, A + 1];

    for(; numB < numA; numB++){
      if(numB % 2 !== 0){
        soma += numB;
      }
    }

    console.log(soma);
  }
}