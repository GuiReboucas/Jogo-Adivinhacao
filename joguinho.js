/*
Faça um joguinho de advinhação que dê pra jogar com 2 usuarios.
1 - Acrescente a informação de quantas vezes foi chutado para acertar.
2 - Coloque o nome dos jogadores.
3 - Crie um ranking.

estrutura de repetição
*/

// console.log(
//   "%cJoguinho de Advinhação",
//   "backgroud-color: fuchsia; color: white; font-weight: bold;" +
//     "font-size: 20px; font-family: Comic Sans MS; font-style: italic" +
//     "text-decoration: underline; text-shadow: 1px 1px blue;"
// );

//melhorias - Encerrar o jogo durante a partida
//adicionar os créditos


//melhorar o nome da variável começa com letra minuscula player1
const Player1 = prompt(
  "Insira aqui o nome do primeiro Jogador: \n(Obs: de até 6 letras)"
);  
//melhorar o nome da variável começa com letra minuscula player2
const Player2 = prompt(
  "Insira aqui o nome do segundo Jogador: \n(Obs: de até 6 letras)"
);
const NumEscolhido = Math.floor(Math.random() * 101); //tirar esse const, e por esse motivo não está mudando de número
//tem que colocar ele dentro de uma estrutura de repetição senão ele só vai rodar uma vez

var contTentativas1 = 0;
var contTentativas2 = 0;

var tentativa = null;

alert("Vez de " + Player1);
do {
  // Jogador 1
  tentativa = Number(prompt("Digite um numero"));
  if (tentativa < NumEscolhido) {
      // Efeito visual para ficar interativo
    console.log("-------------");
    console.log("é maior que " + Tentativa);
    console.log("-------------");
  }
  if (tentativa > NumEscolhido) {
    // Efeito visual para ficar interativo
    console.log("-------------");
    console.log("É menor que " + Tentativa);
    console.log("-------------");
  }
  if (tentativa === NumEscolhido) {
    alert("Acertô mizeravi!");
  }
  contTentativas1++;
} while (tentativa !== NumEscolhido);

alert("Vez de " + Player2);
do {
  // Jogador 2
  tentativa = Number(prompt("Digite um numero"));
  if (Tentativa < NumEscolhido) {
    console.log("-------------");
    console.log("é maior que " + Tentativa);
    console.log("-------------");
  }
  if (tentativa > NumEscolhido) {
    console.log("-------------");
    console.log("É menor que " + Tentativa);
    console.log("-------------");
  }
  if (Tentativa === NumEscolhido) {
    alert("Acertô mizeravi!");
  }
  contTentativas2++;
} while (Tentativa !== NumEscolhido);

if (contTentativas1 < contTentativas2) {
  // Printa Placar
  
  //refatorar com o template literals, da pra botar uma letra melhor tambem
  console.log(
    "          " +
      Player1 +
      " \n         @-------@ \n  " +
      Player2 +
      "  |   @   | \n@-------@|   |   | \n|   @   ||   |   | \n|   |   ||   |   | \n|   |   ||   |   |"
  );
} else if (contTentativas1 > contTentativas2) {
  console.log(
    "          " +
      Player2 +
      " \n         @-------@ \n  " +
      Player1 +
      " |   @   | \n@-------@|   |   | \n|   @   ||   |   | \n|   |   ||   |   | \n|   |   ||   |   |"
  );
} else {
  console.log("Empate");
}
