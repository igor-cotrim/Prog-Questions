/**
 * Senha Fixa
 * 
Escreva um programa que repita a leitura de uma senha até que ela 
seja válida. Para cada leitura de senha incorreta informada, 
escrever a mensagem "Senha Invalida". Quando a senha for informada 
corretamente deve ser impressa a mensagem "Acesso Permitido" e o 
algoritmo encerrado. Considere que a senha correta é o valor 2002. 

Entrada
A entrada é composta por vários casos de testes contendo valores inteiros.

Saída
Para cada valor lido mostre a mensagem correspondente à descrição do problema.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valido = false;

let passwordValido = 2002;

while(!valido) {
  const password = parseInt(lines.shift())

  if(password === passwordValido){
    valido = true;

    console.log("Acesso Permitido");

    break;
  } else {
    console.log("Senha Invalida");
  }
}