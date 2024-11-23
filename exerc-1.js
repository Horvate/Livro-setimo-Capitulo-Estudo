const form = document.querySelector("form");
const resp = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeCompleto = form.inNome.value;
  let cracha = "";

  const nome = nomeCompleto.substr(0, 3);
  const sobrenome = nomeCompleto.substr(19); 

  cracha += `${nome} ${sobrenome}` 
  resp.innerHTML = cracha;
  
});