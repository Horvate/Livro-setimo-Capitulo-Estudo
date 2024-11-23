
const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = form.inData.value;
  const valor = Number(form.inValor.value);
  const hoje = new Date();
  const dataInfra = new Date();
  let dataLimite = new Date();
  let lista = "";
  
  
 
  const partes = data.split("-");
  dataInfra.setDate(Number(partes[2]));
  dataInfra.setMonth(Number(partes[1]) - 1);
  dataInfra.setFullYear(Number(partes[0]));

  const partes2 = data.split("-");
  dataLimite.setDate(Number(partes2[2]));
  dataLimite.setMonth(Number(partes2[1]));
  dataLimite.setFullYear(Number(partes2[0]));
  
  dataLimite.setDate(+ 90);
  const diaLimite = dataLimite.getDate();
  const mesLimite = dataLimite.getMonth();
  const anoLimite = dataLimite.getFullYear();

  const atraso = hoje - dataInfra;
  const dias = atraso / 86400000;
  const calcuDesco = (valor * 20) / 100;
  const desconto = valor - calcuDesco;
  

  if(dias <= 90) {
    lista += `Data Limite para Pagto com Desconto: ${diaLimite}/${mesLimite}/${anoLimite} <br>`;
    lista += `Valor com Desconto R$:${desconto.toFixed(2)}`;
  } else {
    lista += `Valor da Multa R$:${valor.toFixed(2)}`;
  }

  resp.innerHTML = lista;
 

  console.log(`${diaLimite}/${mesLimite}/${anoLimite}`)



   
});