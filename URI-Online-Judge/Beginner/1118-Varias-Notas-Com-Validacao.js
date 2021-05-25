/**
 * Várias Notas Com Validação
 * 
Escreva um programa para ler as notas da primeira e a segunda avaliação 
de um aluno. Calcule e imprima a média semestral. O programa só deverá 
aceitar notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). 
Cada nota deve ser validada separadamente.

No final deve ser impressa a mensagem “novo calculo (1-sim 2-nao)”, 
solicitando ao usuário que informe um código (1 ou 2) indicando se ele 
deseja ou não executar o algoritmo novamente, (aceitar apenas os código 1 ou 2). 
Se for informado o código 1 deve ser repetida a execução de todo o programa 
para permitir um novo cálculo, caso contrário o programa deve ser encerrado.

Entrada
O arquivo de entrada contém vários valores reais, positivos ou negativos. 
Quando forem lidas duas notas válidas, deve ser lido um valor inteiro X . 
O programa deve parar quando o valor lido para este X for igual a 2.

Saída
Se uma nota inválida for lida, deve ser impressa a mensagem “nota invalida”. 
Quando duas notas válidas forem lidas, deve ser impressa a mensagem “media = ” 
seguido do valor do cálculo.

Antes da leitura de X deve ser impressa a mensagem "novo calculo (1-sim 2-nao)" 
e esta mensagem deve ser apresentada novamente se o valor da entrada padrão para 
X for menor do que 1 ou maior do que 2, conforme o exemplo abaixo.

A média deve ser impressa com dois dígitos após o ponto decimal.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const isValido = value => value <= 10 && value >= 0;

let sair = false;

let notaA = null;
let notaB = null;

while (!sair) {
  const notas = parseFloat(lines.shift());

  if (!isValido(notas)) {
    console.log("nota invalida");
    continue;
  }

  if (notaA === null) {
    notaA = notas;
    continue;
  }

  notaB = notas;

  const media = (notaA + notaB) / 2;
  
  notaA = null;
  notaB = null;
  
  console.log("media = " + media.toFixed(2));

  let resposta = null;
  
  do {
    console.log("novo calculo (1-sim 2-nao)");

    resposta = lines.shift();

    switch (resposta) {
      case "1":
        sair = false;
        break;
      case "2":
        sair = true;
        break;
    }
  } while (resposta !== "1" && resposta !== "2");
}
