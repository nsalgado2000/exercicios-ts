function paraVetor<T>(valor:T): Array<T> {
  return [valor];
}



const v1 = paraVetor(5);
const v2 = paraVetor("Olá, mundo!");
const v3 = paraVetor({ x: 1, y: 2 });
