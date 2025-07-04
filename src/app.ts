import { Planet } from "./planet";
import { Renderer } from "./Renderer";
import { Vec2d } from "./vec2d";

const sun: Planet = new Planet(
  50,
  "yellow",
  0.1,
  new Vec2d(400, 400),
  new Vec2d(1, 0),
  0,
);

const mercury: Planet = new Planet(
  10,
  "DarkCyan",
  0.05,
  new Vec2d(400, 300),
  new Vec2d(1, 0),
  3.5,
);
const venus: Planet = new Planet(
  12,
  "BlueViolet",
  0.05,
  new Vec2d(400, 200),
  new Vec2d(1, 0),
  4.5,
);

const earth: Planet = new Planet(
  15,
  "blue",
  0.05,
  new Vec2d(400, 100),
  new Vec2d(1, 0),
  5,
);

const moon: Planet = new Planet(
  5,
  "grey",
  0.001,
  new Vec2d(400, 55),
  new Vec2d(1, 0),
  6.5,
);

window.onload = function () {
  let renderer = new Renderer();
  setInterval(() => tick(renderer), 20);
};
function tick(renderer: Renderer): void {
  if (document.hasFocus()) {
    earth.applyGravity(sun);
    moon.applyGravity(sun);
    moon.applyGravity(earth);
    venus.applyGravity(sun);
    mercury.applyGravity(sun);
    earth.tick();
    moon.tick();
    venus.tick();
    mercury.tick();
    renderer.clear();
    renderer.renderPlanet(sun);
    renderer.renderPlanet(earth);
    renderer.renderPlanet(moon);
    renderer.renderPlanet(venus);
    renderer.renderPlanet(mercury);
  }
}
