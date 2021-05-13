/**
 * Tempo de Jogo com Minutos
 * 
  Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. 
  A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [hInicial, minInicial, hFinal, minFinal] = lines.shift().split(" ").map((item) => parseInt(item));
const useODiaSeguinte = hInicial > hFinal || minInicial > minFinal;
const base = new Date();

const dataInicial = new Date(
  base.getFullYear(),
  base.getMonth(),
  base.getDate(),
  hInicial,
  minInicial
);
console.log(dataInicial);

const dataFinal = new Date(
  base.getFullYear(),
  base.getMonth(),
  useODiaSeguinte ? base.getDate() + 1 : base.getDate(),
  hFinal,
  minFinal
);
console.log(dataFinal);

const difMili = dataFinal - dataInicial;
let difHoras = Math.floor((difMili % 86400000) / 3600000);
let difMinutos = Math.round(((difMili % 86400000) % 3600000) / 60000);

if (!difHoras && !difMinutos) difHoras = 24;
console.log(difMili);
console.log(difHoras);
console.log(difMinutos);
// console.log(`O JOGO DUROU ${difHoras} HORA(S) E ${difMinutos} MINUTO(S)`);
