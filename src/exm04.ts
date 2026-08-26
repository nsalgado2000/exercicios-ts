export type Pessoa = {
  nome: string;
  idade: number;
  altura: number;
  vivo: boolean;
};

let p1: Pessoa;

p1 = {
  nome: "xpto",
  idade: 20,
  altura: 1.83,
  vivo: true,
};

console.log(p1);
