const formula = prompt("Fórmula");      // lê a formula

let abre = 0;            // contadores
let fecha = 0;

for (const simbolo of formula) {       // percorre os caracteres da fórmula
  if (simbolo == "(") {
    abre++
  } else if (simbolo == ")") {
    fecha++
  }
  // se, em algum momento, o número fecha for maior que abre...
  if (fecha > abre) {
    break      // sai da repetição
  }
}
if (abre == fecha) {
  alert("Ok! Fórmula correta (em relação ao parênteses)");
} else {
  alert("Erro... Fórmula incorreta");
}

