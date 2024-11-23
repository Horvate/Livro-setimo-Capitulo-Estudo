//           Percorrer caracteres de um string

const anuncio = prompt("Anúncio: ");     // lê anúncio 
let numPalavras = 0;                     // inicializa o contador
const tam = anuncio.length;           // obtém tamanho 
for (let i = 0; i < tam;  i++) {     // percorrer caracteres do anúncio
  if (anuncio.charAt(i) == " ") {    // se encontrou um espaço
    numPalavras++                     // icrementa contador
  }
}
//       exibe anúncio e números de palavras (que é o n° de espaços + 1)

alert(`Anúncio: ${anuncio}\nNº Palavras: ${(numPalavras + 1)}`);
