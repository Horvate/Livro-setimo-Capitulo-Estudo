const palavra = "saladas";
const posicao1 = palavra.indexOf("a");  // retorna 1
const posicao2 = palavra.lastIndexOf("a"); // retorna 5
const posicao3 = palavra.indexOf("sal");  // retorna 0
const posicao4 = palavra.indexOf("e"); // retorna -1
const posicao5 = palavra.includes("d");  // retorna true


console.log(posicao1);
console.log(posicao2);
console.log(posicao3);
console.log(posicao4);
console.log(posicao5);