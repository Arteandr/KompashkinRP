import { Permissions } from "../../shared/enums/permissions";
import { Character } from "../../shared/interfaces/Character";

/**
 * Используется для хранения информации о аккаунте
 * 
 * @export
 * @interface Account
 */
export interface Account {
    _id?: any;
    login: string;
    password: string;
    email?: string;
    discord?: string;
    ips: Array<string>;
    hardware: Array<string>;
    permissionLevel: Permissions;
    banned: boolean;
    reason?: string;
    registerDate: Date;
    characters: Character[];
}