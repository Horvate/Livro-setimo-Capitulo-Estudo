const hoje = new Date();
const dia = hoje.getDate();
const mes = (hoje.getMonth() + 1);
const ano = hoje.getFullYear();

console.log(hoje);

console.log(`Data: ${dia}/${mes}/${ano}`);

console.log(typeof dia);    // mostra o tipo da variável dia: number

//const dia2 = dia.toString();      // converte dia para string
//const dia3 = dia.padStart(2, 0);    // dia 2 2 espaços:adiciona 0 antes se dia < 10

const dia2 = dia.toString().padStart(2, "0");
const mes2 = mes.toString().padStart(2, "0");

console.log(`Data: ${dia2}/${mes2}/${ano}`);
