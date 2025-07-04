export class Vec2d {
  constructor(
    public x: number,
    public y: number,
  ) {}

  public normalize(): Vec2d {
    const xSign = Math.sign(this.x);
    const ySign = Math.sign(this.y);
    const xSquared = this.x * this.x;
    const ySquared = this.y * this.y;
    const sum = xSquared + ySquared;
    if (sum !== 0) {
      this.x = Math.sqrt(xSquared / sum) * xSign;
      this.y = Math.sqrt(ySquared / sum) * ySign;
    }
    return this;
  }

  public measureSpeed(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public diff(vec2d: Vec2d): Vec2d {
    return new Vec2d(this.x - vec2d.x, this.y - vec2d.y);
  }

  public add(vec2d: Vec2d): Vec2d {
    return new Vec2d(this.x + vec2d.x, this.y + vec2d.y);
  }
}
