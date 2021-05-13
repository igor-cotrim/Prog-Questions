/**
 * Sort Simples
 * 
  Leia 3 valores inteiros e ordene-os em ordem crescente. No final, 
  mostre os valores em ordem crescente, uma linha em branco e em seguida, 
  os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [A, B, C] = lines.shift().split(" ").map((item) => parseInt(item));

if (A < B && A < C){
  console.log(A);

  if(B < C){
    console.log(B);
    console.log(C);
  } else {
    console.log(C);
    console.log(B);
  }
} else if (B < C){
  console.log(B);

  if(A < C){
    console.log(A);
    console.log(C);
  } else {
    console.log(C);
    console.log(A);
  }
} else{
  console.log(C);

  if(A < B){
    console.log(A);
    console.log(B);
  } else {
    console.log(B);
    console.log(A);
  }
}

console.log("");
console.log(A);
console.log(B);
console.log(C);