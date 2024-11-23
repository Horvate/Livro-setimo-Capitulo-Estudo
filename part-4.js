const palavra = "saladas";
const copia1 = palavra.substr(2);
const copia2 = palavra.substr(2, 4);
const copia3 = palavra.substr(0, palavra.length-1);
const copia4 = palavra.substr(-2);

console.log(copia1); // ladas
console.log(copia2); // lada
console.log(copia3); // salada
console.log(copia4); // as