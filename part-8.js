//const novaStr = str.replace(caracterePesquisado, novoCaractere);

const senha = "ABACAD";

const senha1 = senha.replace("A", "X");
const senha2 = senha.replace(/A/g, "X");

console.log(senha1);      // XBACAD
console.log(senha2);      // XBXCXD

const app = "App Controle Financeiro";       
const app2 = app.replace(" ", "");           // AppControle Financeiro 
const app3 = app.replace(/ /g,"");          // AppControleFinanceiro
const app4 = app.replace(/ /g, "").toLowerCase();   // appcontrolefinaceiro

console.log(app2);
console.log(app3);
console.log(app4);