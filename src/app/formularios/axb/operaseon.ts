export class Operaseon {

  a: number = 0;
  b: number = 0;
  resultado: number = 0;

  chido(a: number, b: number): void {
    this.a = a;
    this.b = b;
  }

  multiplicar(): number {
    let suma = 0;
    let veces = Math.abs(this.b);
    for (let i = 0; i < veces; i++) suma += this.a;
    this.resultado = this.b < 0 ? -suma : suma;
    return this.resultado;
  }
}
