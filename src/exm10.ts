function imprime(msg: string, vezes: number): void {
  for (let index = 0; index < vezes; index++) {
    console.log(msg);
    //if (index === 3) return;
  }
}

imprime("xpto", 10)
