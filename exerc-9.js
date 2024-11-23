const form = document.querySelector('form');
const resp = document.querySelector("h3");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const crip = form.inMensagem.value;
  let par = "";
  let impar = "";

  for (let i = 0; i < crip.length; i++) {
    if(i % 2 === 0) {
      
      par += crip[i];
      
    } 
    if(i % 2 !== 0) {
      
      impar += crip[i];
    }
  }

  resp.innerHTML = impar + par;

  form.inMensagem.focus();
});

form.inDecrip.addEventListener("click", () => {
  const decri = form.inMensagem.value;
  resp.innerHTML = decri;

  form.inMensagem.focus();
});