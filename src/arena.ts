import { Bullet } from "./bullet";
import { Player } from "./player";
import { Vec2d } from "./vec2d";

const LEFT_EDGE = 0;
const TOP_EDGE = 0;
const RIGHT_EDGE = 500;
const BOTTOM_EDGE = 1000;
const ARENA_WIDTH = RIGHT_EDGE - LEFT_EDGE;
const ARENA_HEIGHT = BOTTOM_EDGE - TOP_EDGE;
export const DIR_UP = new Vec2d(0, -1);
export const DIR_DOWN = new Vec2d(0, 1);
export const DIR_LEFT = new Vec2d(-1, 0);
export const DIR_RIGHT = new Vec2d(1, 0);

export class Arena {
    public player: Player = new Player(
        new Vec2d(LEFT_EDGE + 0.5 * RIGHT_EDGE, TOP_EDGE + 0.9 * BOTTOM_EDGE));

    public bullets: Bullet[] = [];

    public tick() {
        this.movePlayer();
        this.moveBullets();
    }

    movePlayer() {
        const movement = new Vec2d(0, 0);
        if (this.player.controls.left) {
            movement.add(DIR_LEFT);
        }
        if (this.player.controls.right) {
            movement.add(DIR_RIGHT);
        }
        movement.mul(this.player.speed);

        const simulation = this.player.pos.addCopy(movement);
        if (simulation.x - this.player.size * 0.5 > LEFT_EDGE && simulation.x + this.player.size * 0.5 < RIGHT_EDGE) {
            this.player.pos.add(movement);
        }

        if (this.player.controls.pew) {
            this.bullets.push(new Bullet(this.player.pos.addCopy(DIR_UP.mulCopy(10)), DIR_UP.mulCopy(10)));
        }
    }

    moveBullets() {
        this.bullets.forEach(bullet => {
            if(bullet.pos.y > BOTTOM_EDGE || bullet.pos.y < TOP_EDGE){
                bullet.movement.y *= -1;
            }
            bullet.pos.add(bullet.movement);
        });
    }
}