const hoje = new Date();
const amanha = new Date();
const dia = amanha.getDate();
amanha.setDate(dia + 1);
console.log(`Hoje: ${hoje}\nAmanhã: ${amanha}`);

const anoAtual = new Date().getFullYear();
const idade = prompt(`Quantos anos você comemora em ${anoAtual}?`);
const anoNasc = anoAtual - idade;
alert(`Ah... Então você nasceu em ${anoNasc}`);