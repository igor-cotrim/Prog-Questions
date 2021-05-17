/**
 * Animal
 * 
  Neste problema, você deverá ler 3 palavras que definem o tipo de animal 
  possível segundo o esquema abaixo, da esquerda para a direita.  
  Em seguida conclua qual dos animais seguintes foi escolhido, através 
  das três palavras fornecidas.

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar 
o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let animalA = lines.shift();
let animalB = lines.shift();
let animalC = lines.shift();

if(animalA === 'vertebrado' && animalB === 'ave' && animalC === 'carnivoro'){
  console.log('aguia')
} else if(animalA === 'vertebrado' && animalB === 'ave' && animalC === 'onivoro'){
  console.log('pomba')
} else if(animalA === 'vertebrado' && animalB === 'mamifero' && animalC === 'onivoro'){
  console.log('homem')
} else if(animalA === 'vertebrado' && animalB === 'mamifero' && animalC === 'herbivoro'){
  console.log('vaca')
} else if(animalA === 'invertebrado' && animalB === 'inseto' && animalC === 'hematofago'){
  console.log('pulga')
} else if(animalA === 'invertebrado' && animalB === 'inseto' && animalC === 'herbivoro'){
  console.log('lagarta')
} else if(animalA === 'invertebrado' && animalB === 'anelideo' && animalC === 'hematofago'){
  console.log('sanguessuga')
} else if(animalA === 'invertebrado' && animalB === 'anelideo' && animalC === 'onivoro'){
  console.log('minhoca')
} 