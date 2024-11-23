const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const frase = form.inFrase.value;
  const contrario = frase.split('').reverse().join('');

  if (frase == contrario) {
    resp.innerHTML = `${frase} é um Palíndromo`;
  } else {
    resp.innerHTML = `${frase} não é um Palíndromo`;
  }

  form.inFrase.focus();
  form.inFrase.value = "";
});