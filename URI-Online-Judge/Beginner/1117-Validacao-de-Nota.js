/**
 * Validação de Nota
 * 

Faça um programa que leia as notas referentes às duas avaliações de um aluno. 
Calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas 
válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve 
ser validada separadamente.

Entrada
A entrada contém vários valores reais, positivos ou negativos. O programa deve 
ser encerrado quando forem lidas duas notas válidas.

Saída
Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " 
seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o 
ponto decimal.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const notas = [];

let validarNota = notas.length === 2;

while(!validarNota){
  const nota = parseFloat(lines.shift())

  if(nota >= 0 && nota <= 10){
    notas.push(nota);
  } else {
    console.log("nota invalida")
  }

  validarNota = notas.length === 2;
}

let media = ((notas[0] + notas[1]) / 2).toFixed(2)

console.log("media = " + media);