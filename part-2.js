const form = document.querySelector("form");  // obtém elementos da página
const resp = document.querySelector("span");

form.addEventListener("submit", (e) => {     // "executa" evento submit do form
  e.preventDefault();                            // evita o envio do form
 
  const fruta = form.inFruta.value.toUpperCase();    // coteúdo do campo em maiúsculas
  let resposta = "";                                 // string que irá conter a resposta

  for (const letra of fruta) {       // percorrer todos os caracteres da fruta
    if(letra == fruta.charAt(0)) {    // se  letra igual a letra inicial da string... 
      resposta += fruta.charAt(0)      // adiciona a letra inicial 
    } else {                           // se não, ... 
      resposta += "-";                 // adiciona o sublinhado
    }
  }

  resp.innerHTML = resposta;    // exibe a resposta
  form.inFruta.value = "*".repeat(fruta.length)    // preenche com "*", conforme tamanho
});