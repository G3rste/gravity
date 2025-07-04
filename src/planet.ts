import { Vec2d } from "./vec2d";
export class Planet {
    constructor(
        public radius: number,
        public weight: number,
        public position: Vec2d,
        public direction: Vec2d,
        public velocity: number) { }

    public tick(): void {
        this.position.x += this.direction.x * this.velocity;
        this.position.y += this.direction.y * this.velocity;
    }

    public applyGravity(planet: Planet): void {
        const gravityVector = planet.position.diff(this.position).normalize();
        const gravity = 0.1;
        gravityVector.x*=gravity;
        gravityVector.y*=gravity;

        this.direction.x*= this.velocity;
        this.direction.y*= this.velocity;
        const newDir = this.direction.add(gravityVector);

        this.velocity = newDir.measureSpeed();
        this.direction = newDir.normalize()
     }


};