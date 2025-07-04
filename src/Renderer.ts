import { Planet } from "./planet";

export class Renderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  constructor() {
    this.canvas = document.getElementById("main") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  renderPlanet(planet: Planet): void {
    this.context.beginPath();
    this.context.fillStyle = planet.color;
    this.context.arc(
      planet.position.x,
      planet.position.y,
      planet.radius,
      0,
      2 * Math.PI,
    );
    this.context.fill();
    this.context.stroke();
  }

  clear(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
