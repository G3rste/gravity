import { Arena, DIR_LEFT, DIR_RIGHT } from "./arena";
import { Planet } from "./planet";
import { Renderer } from "./renderer";
import { Vec2d } from "./vec2d";

const arena = new Arena();


window.onload = function () {
  const renderer = new Renderer();
  document.onkeydown = event => onKeyToggle(event.key, true);
  document.onkeyup = event => onKeyToggle(event.key, false);
  tick(renderer);
};
function tick(renderer: Renderer): void {
  if (document.hasFocus()) {
    arena.tick();
    renderer.renderFrame(arena);
  }
  requestAnimationFrame(() => tick(renderer));
}
function onKeyToggle(key: string, down: boolean) {
  console.log(key);
  switch (key) {
    case 'ArrowLeft':
    case 'a':
      arena.player.controls.left = down;
      break;
    case 'ArrowRight':
    case 'd':
      arena.player.controls.right = down;
      break;
    case 'f':
    case ' ':
      arena.player.controls.pew = down;
  }
}