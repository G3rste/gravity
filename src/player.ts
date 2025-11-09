import { Controls } from "./controls";
import { Vec2d } from "./vec2d";

export class Player{
    public readonly controls: Controls = {left: false, right: false, pew: false}
    public readonly speed: number = 3;
    public readonly size: number = 10;

    constructor(public pos: Vec2d){

    }
}