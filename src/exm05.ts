import type { Pessoa } from "./exm04.js";

let numeros = [];

numeros.push(1);
numeros.push(2);
numeros.push(3);

console.log(numeros);

let nomes: string[];
nomes = [];
//nomes.push(123);
nomes.push("Fulano");
nomes.push("Ciclano");

console.log(nomes);

let pessoas: Pessoa[] = [];

pessoas.push({
  idade: 12,
  nome: "josé",
  altura: 2.83,
  vivo: true,
});
