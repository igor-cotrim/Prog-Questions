/**
 * Quadrante
 * 
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade
 indeterminada de pontos no sistema cartesiano. Para cada ponto 
 escrever o quadrante a que ele pertence. O algoritmo será 
 encerrado quando pelo menos uma de duas coordenadas for NULA 
 (nesta situação sem escrever mensagem alguma).

Entrada
A entrada contém vários casos de teste. Cada caso de teste 
contém 2 valores inteiros.

Saída
Para cada caso de teste mostre em qual quadrante do sistema 
cartesiano se encontra a coordenada lida, conforme o exemplo.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let sair = false;

while(!sair){
  const [x, y] = lines.shift().split(" ").map((item) => parseInt(item));

  if(x === 0 || y === 0){
    sair = true;
    break;
  } else if(x > 0 && y > 0){
    console.log("primeiro")
  } else if(x < 0 && y > 0){
    console.log("segundo")
  }  else if(x < 0 && y < 0){
    console.log("terceiro")
  }  else if(x > 0 && y < 0){
    console.log("quarto")
  }  
}