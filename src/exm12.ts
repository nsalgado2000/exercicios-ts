type FuncaoNumerica = (v: number) => number;

function imprime(funcao: FuncaoNumerica, valor: number) {
  console.log(funcao(valor));
}

function quadrado(valor: number): number {
  return valor ** 2;
}

function cubo(valor: number): number {
  return valor ** 3;
}

imprime(quadrado, 2);

imprime(cubo, 2);
