let data = new Date();  // Cria um objeto Date com a data atual
data.setDate(data.getDate() + 90);  // Acrescenta 90 dias

const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

console.log(`${dia}/${mes}/${ano}`);  // Exibe a nova data

