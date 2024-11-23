const  altura = Number(prompt("Altura da árvore"));  // lê o número de linhas (altura)
console.log();     // deixa uma linha em branco

for (let i = 1; i <= altura; i++) {                 // inicializa repetição
  const espacos = 30 + (altura - i);                // calculaa espaços do inicio 
  console.log(" ".repeat(espacos) + "*".repeat(i*2));     // exibe cada linha
}