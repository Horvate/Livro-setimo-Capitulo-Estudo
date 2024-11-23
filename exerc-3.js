const form = document.querySelector("form");   // obtém elementos da página
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();          // evita o invio do form

  const funcionarios = form.inFuncionario.value.trim();    // obtém o  nome do funcionário
  let email = "";        // vai concatenar as letras

  if (!funcionarios.includes(" ")) {            // se o nome não (!)possuir esoaços
    alert("Informe nome completo...");
    return
  }

  // divide nome em itens de vetor, criados a cada ocorrência de espaço

  const partes = funcionarios.split(" ");
  const tam = partes.length; // obtém n° de itens do vetor partes

  for (let i = 0; i < tam - 1;i++) {         // percorre itens do vetor (exeto o último)
    email += partes[i].charAt(0);      // e obtém a letra inicial de cada item
  }
     // concatenar as letras iniciais com a última parte (sobrenome) e empresa
  email += partes[tam - 1] + "@empresa.com.br";

  resp.innerHTML = `E-mail: ${email.toLowerCase()}`; // exibe e-mail em minúsculas
  
});