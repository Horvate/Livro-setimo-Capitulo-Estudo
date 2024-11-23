const form = document.querySelector("form");   // obtém elementos da página
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();       // evita envio do form

  // obtém nome informado e retira espaços em branco do inicio e no final da string

  const nome = form.inFuncionario.value.trim();

  if (!nome.includes(" "))   {       // se o nome (!) não possuir espaços
    alert("Informe o nome completo...");
    return
  }
  const priEspaco = nome.indexOf(" ");        // posição do primeiro espaço
  const ultEspaco = nome.lastIndexOf(" ");    // posição do último espaço
  
  //         copia nome e sobrenome usando os parâmetros do substr()

  const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  resp.innerHTML = cracha;        // exibe a resposta
});