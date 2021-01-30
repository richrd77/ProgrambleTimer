export class Color {
  constructor(public r: number, public g: number, public b: number) {}

  GetColor(): string {
    return `rgba(${this.r},${this.g},${this.b}, 0.8)`;
  }
}
