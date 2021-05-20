/**
 * Experiências
 * 
Maria acabou de iniciar seu curso de graduação na faculdade de medicina 
e precisa de sua ajuda para organizar os experimentos de um laboratório o
qual ela é responsável. Ela quer saber no final do ano, quantas cobaias 
foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, 
ratos e coelhos. Para obter estas informações, ela sabe exatamente 
o número de experimentos que foram realizados, o tipo de cobaia 
utilizada e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os 
vários casos de teste que vem a seguir. Cada caso de teste contém um 
inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias 
utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de 
cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia 
utilizada e o percentual de cada uma em relação ao total de cobaias 
utilizadas, sendo que o percentual deve ser apresentado com dois dígitos 
após o ponto.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let casos = parseInt(lines.shift());

const animais = {
  C: {
    name: "coelhos",
    count: 0
  },
  R: {
    name: "ratos",
    count: 0
  },
  S: {
    name: "sapos",
    count: 0
  },
  getTotal: function() {
    return this.C.count + this.R.count + this.S.count;
  },
  getPercentual: function(animal) {
    const pegarCount = this[animal].count;

    const total = this.getTotal();

    const percentual = (pegarCount * 100) / total;

    return percentual.toFixed(2);
  }
};

for(let i = 0; i < casos; i++){
  const experimento = lines.shift();

  const [quantidade, animal] = experimento.split(" ");

  animais[animal].count += parseInt(quantidade);
}

console.log("Total: " + animais.getTotal() + " cobaias");
console.log("Total de coelhos: " + animais.C.count);
console.log("Total de ratos: " + animais.R.count);
console.log("Total de sapos: " + animais.S.count);
console.log("Percentual de coelhos: " + animais.getPercentual("C") + " %");
console.log("Percentual de ratos: " + animais.getPercentual("R") + " %");
console.log("Percentual de sapos: " + animais.getPercentual("S") + " %");