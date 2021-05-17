/**
 * Números Positivos
 * 
 Faça um programa que leia 6 valores. Estes valores serão somente 
 negativos ou positivos (desconsidere os valores nulos). A seguir, 
 mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const filterFunction = () => Number(lines.shift()) > 0;

const entradas = Array.from({ length: 6 }).filter(filterFunction);

console.log(`${entradas.length} valores positivos`);
