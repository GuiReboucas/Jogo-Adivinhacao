/*
Faça um joguinho de advinhação que dê pra jogar com 2 usuarios.
1 - Acrescente a informação de quantas vezes foi chutado para acertar.
2 - Coloque o nome dos jogadores.
3 - Crie um ranking.

estrutura de repetição
*/
const Nome1 = prompt("Insira aqui o nome do primeiro Jogador: \n(Obs: de até 6 letras)")
const Player2 = prompt("Insira aqui o nome do segundo Jogador: \n(Obs: de até 6 letras)")
const NumEscolhido = Math.floor(Math.random() * 101)

var contTentativas1 = 0
var contTentativas2 = 0

var Tentativa = null

alert("Vez de " + Player1)
do { // Jogador 1
    Tentativa = Number(prompt("Digite um numero"))
    if (Tentativa < NumEscolhido) {
        console.log("-------------")
        console.log("é maior que " + Tentativa)
        console.log("-------------")
    }
    if (Tentativa > NumEscolhido) {
        console.log("-------------")
        console.log("É menor que " + Tentativa)
        console.log("-------------")
    }
    if (Tentativa === NumEscolhido) {
        alert("Acertô mizeravi!")
    }
    contTentativas1++
}while (Tentativa !== NumEscolhido)

alert("Vez de " + Player2)
do { // Jogador 2 
    Tentativa = Number(prompt("Digite um numero"))
    if (Tentativa < NumEscolhido) {
        console.log("-------------")
        console.log("é maior que " + Tentativa)
        console.log("-------------")
    }
    if (Tentativa > NumEscolhido) {
        console.log("-------------")
        console.log("É menor que " + Tentativa)
        console.log("-------------")
    }
    if (Tentativa === NumEscolhido) {
        alert("Acertô mizeravi!")
    }
    contTentativas2++
}while (Tentativa !== NumEscolhido)

if (contTentativas1 < contTentativas2) { // Printa Placar
    console.log(
        "          "+Player1+" \n         @-------@ \n  "+Player2+"  |   @   | \n@-------@|   |   | \n|   @   ||   |   | \n|   |   ||   |   | \n|   |   ||   |   |"
    )
}else if (contTentativas1 > contTentativas2) {
    console.log(
        "          "+Player2+" \n         @-------@ \n  "+Player1+" |   @   | \n@-------@|   |   | \n|   @   ||   |   | \n|   |   ||   |   | \n|   |   ||   |   |"
    )
}else {
    console.log("Empate")
}



var Bonito = "Felicidade"