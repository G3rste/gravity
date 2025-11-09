import { Arena } from "./arena";
import { Bullet } from "./bullet";
import { Planet } from "./planet";
import { Player } from "./player";

export class Renderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  constructor() {
    this.canvas = document.getElementById("main") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  
  renderFrame(arena: Arena) {
    this.clear();
    this.renderPlayer(arena.player);
    arena.bullets.forEach(bullet => this.renderBullet(bullet))
  }

  renderPlayer(player: Player): void {
    this.context.beginPath();
    this.context.fillStyle = 'green';
    this.context.arc(
      player.pos.x,
      player.pos.y,
      player.size,
      0,
      2 * Math.PI,
    );
    this.context.fill();
    this.context.stroke();
  }

  renderBullet(bullet: Bullet){
    this.context.beginPath();
    this.context.fillStyle = 'red';
    this.context.arc(
      bullet.pos.x,
      bullet.pos.y,
      bullet.size,
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
