type Codigo = 200 | 404 | 500;

let valor1: Codigo = 404;

type CodigoCompleto = Codigo | "Erro";

let valor2: CodigoCompleto = "Erro";

//console.log(valor1, valor2);

const valores: Array<CodigoCompleto> = ["Erro", 404, 200, "Erro"];

for (let i = 0; i < valores.length; i++) {
  const v = valores[i];
  if (typeof v === "number") {
    console.log("> ", v, v*2);
  } else {
    console.log(v);
  }
}
