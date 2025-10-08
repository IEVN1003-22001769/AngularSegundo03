
export class Distancia {
  constructor(
    public x1: number = 0,
    public y1: number = 0,
    public x2: number = 0,
    public y2: number = 0
  ) {}

  calcular(): number {
    const a = Number(this.x1), b = Number(this.y1), c = Number(this.x2), d = Number(this.y2);
    if ([a, b, c, d].some(Number.isNaN)) return NaN;
    return Math.hypot(c - a, d - b);
  }

  operasion(): string {
    const dx = this.x2 - this.x1;
    const dy = this.y2 - this.y1;
    return `dx = ${dx}\ndy = ${dy}\nd = √(${dx}² + ${dy}²) = ${Math.hypot(dx, dy).toFixed(4)}`;
  }
}
