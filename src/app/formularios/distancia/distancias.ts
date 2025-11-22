
export class Distancia {
   x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;

  calcular(): number {
    const a = Number(this.x1), b = Number(this.y1), c = Number(this.x2), d = Number(this.y2);
    return Math.hypot(c - a, d - b);
  }
}
