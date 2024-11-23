const form = document.querySelector("form");    // obtém elementos da página
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();        // evita o envio do form

  const senha = form.inSenha.value;           // obtém senha informada pelo usuário
  const erros = [];

  // verificar se o tamanho da senha é inválido

  if (senha.length < 8 || senha.length > 15) {
    erros.push("possuir entre 8 e 15 caracteres");
  }

  // verificar se não pussui números

  if (senha.match(/[0-9]/g) == null) {
    erros.push("possuir números (no minimo, 1)");
  }

  // verificar se possui letra minúsculas

  if (!senha.match(/[a-z]/g)) {
   erros.push("possuir letras minúsculas (no minimo, 1)"); 
  }

  // verificar se não possui letras maiúsculas ou se possui apena 1

  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push("possuir letras maiúsculas (no minimo 2)");
  }

  // verificar se não possui simbolos ou "_"

  if (!senha.match(/[\W|_]/g)) {
    erros.push("possuir simbolos (no minimo 1)");
  }

  // se vetor está vazio, significa que não foram encontrados erros

  if (erros.length == 0) {
    resp.innerHTML = "Ok! Senha Válida";
  } else {
    resp.innerHTML = `Erro... A senha deve ${erros.join(", ")}`;
  }

  form.inSenha.focus();
  form.inSenha.value = "";
});