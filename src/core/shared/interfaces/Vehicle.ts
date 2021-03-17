import { Vector3 } from "alt-server";

export interface Vehicle {
    uid: string;
    model: string;
    position: Vector3;
    rotation: Vector3;
    fuel?: number;
}