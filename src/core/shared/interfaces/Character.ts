import { Vehicle } from "alt-server";
import { Vector3 } from "alt-server";
import { DEFAULT_CONFIG } from "../../server/config/main";
import { CharacterInfo } from "./CharacterInfo";
import { Item } from "./Item";

export interface Character {
    _id?: any;
    account_id: any;
    level: number;
    vip: string;
    playedTime: number;
    fraction: string;
    pos: Vector3;
    firstName: string;
    lastName: string;
    cash: number;
    bank: number;
    health: number;
    armour: number;
    isDead: boolean;
    appearance: Partial<Character>;
    info: Partial<CharacterInfo>;
    inventory: Array<Array<Partial<Item>>>;
    toolbar: Array<Partial<Item>>;
    vehicles: Array<Partial<Vehicle>>;
}

export const CharacterDefaults: Partial<Character> = {
    pos: DEFAULT_CONFIG.PLAYER_NEW_SPAWN_POS as Vector3,
    cash: DEFAULT_CONFIG.PLAYER_CASH,
    bank: DEFAULT_CONFIG.PLAYER_BANK,
    appearance: {},
    info: {},
    isDead: false,
    health: 199,
    armour: 0,
    vehicles: []
};