import { Planet } from "./planet";
import { Renderer } from "./Renderer";
import { Vec2d } from "./vec2d";

let sun: Planet = new Planet(
    50,
    0.1,
    new Vec2d(400, 400),
    new Vec2d(1, 0),
    0)

let earth: Planet = new Planet(
    20,
    0.01,
    new Vec2d(400, 200),
    new Vec2d(1, 0),
    4
)

let moon: Planet = new Planet(
    5,
    0.001,
    new Vec2d(400, 150),
    new Vec2d(1, 0),
    7
)

window.onload = function () {
    let renderer = new Renderer();
    setInterval(() => tick(renderer), 20)
}
function tick(renderer: Renderer): void {
    if (document.hasFocus()) {
        earth.applyGravity(sun);
        moon.applyGravity(sun)
        moon.applyGravity(earth)
        earth.tick();
        moon.tick();
        renderer.clear();
        renderer.renderPlanet(sun);
        renderer.renderPlanet(earth);
        renderer.renderPlanet(moon)
    }
}