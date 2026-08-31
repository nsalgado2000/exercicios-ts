import type { jogador } from "./jogador.js";

const numero: number = Math.floor(Math.random() * 9) + 1;

function Comecar() {
  let jogadores: Array<jogador> = [];
  const numero = Math.floor(Math.random() * 9) + 1;
  jogadores[0] = {
    nome: "John doe",
    recebidas: [numero, numero, numero, numero, numero],
    equipe: "a",
  };
  jogadores[1] = {
    nome: "Joshua doe",
    recebidas: [numero, numero, numero, numero, numero],
    equipe: "b",
  };
  jogadores[2] = {
    nome: "Fulano",
    recebidas: [numero, numero, numero, numero, numero],
    equipe: "a",
  };
  jogadores[3] = {
    nome: "Peter Parker",
    recebidas: [numero, numero, numero, numero, numero],
    equipe: "b",
  };

  console.log("O Jogo Começou! \n");
  //console.log("Equipes: \n ");
  //console.log("Equipe A: \n");

  for (let i = 1; i < 4; i++){
    console.log("Informações do jogador ",  i, " :")
    console.log("nome do jogador ", i, " : ", jogadores[i].nome);
    console.log("cartas do jogador ", i, " : " jogadores[i].recebidas);
  }
  console.log("Informações do jogador 1: ", jogadores[1].recebidas)

  //tem todos os 4 jogadores e as respectivas equipes
}
