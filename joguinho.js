/*
Faça um joguinho de advinhação que dê pra jogar com 2 usuarios.
1 - Acrescente a informação de quantas vezes foi chutado para acertar.
2 - Coloque o nome dos jogadores.
3 - Crie um ranking.

estrutura de repetição
*/

console.log(
  "%cJoguinho de Advinhação",
  "backgroud-color: fuchsia; color: white; font-weight: bold;" +
    "font-size: 20px; font-family: Comic Sans MS; font-style: italic" +
    "text-decoration: underline; text-shadow: 1px 1px blue;"
);

//melhorias - Encerrar o jogo durante a partida

function CheckNames(a) {
  Flag = false
  do {
    var Name = prompt(
      "Insira aqui o nome do "+ a +" Jogador: \n(Obs: de até 6 letras)"
    )
    if (Name.length > 6) {
      alert("Tente Novamente")
    }else if (Name.length <= 6) {
      Flag = true
    }
  } while (Flag == false)
  return Name
}

function Jogada(a, b) {
  alert("Vez de " + a)
  var NumEscolhido = Math.floor(Math.random() * 101)
  do {
    var tentativa = Number(prompt("Digite um numero"));
    // Efeito visual para ficar interativo
    if (tentativa < NumEscolhido) { 
      console.log(`
-------------
é maior que  ${tentativa}
-------------
      `)
    }else if (tentativa > NumEscolhido) {
      console.log(`
-------------
é menor que ${tentativa}
-------------
      `)
    }else if (tentativa === NumEscolhido) {
      alert("Acertô mizeravi!");
    }
    b++
  } while (tentativa !== NumEscolhido)
}

const player1 = CheckNames("primeiro")
const player2 = CheckNames("segundo")

var contTentativas1 = 0
var contTentativas2 = 0

Jogada(player1, contTentativas1)
Jogada(player2, contTentativas2)

if (contTentativas1 < contTentativas2) {// Printa Placar
  console.log(`
       ${player1}
       @---@
${player2} | @ |
@---@  | | |
| @ |  | | |  
| | |  | | |
| | |  | | |
  `)
}else if (contTentativas1 > contTentativas2) {
  console.log(`
       ${player2}
       @---@
${player1} | @ |
@---@  | | |
| @ |  | | |
| | |  | | |
| | |  | | |
  `)
}else if (contTentativas1 == contTentativas2){
  console.log("Empate");
}