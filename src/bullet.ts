import { Vec2d } from "./vec2d";

export class Bullet{
    public readonly speed: number = 10;
    public readonly size: number = 4;

    constructor(public pos: Vec2d, public movement: Vec2d){}
}