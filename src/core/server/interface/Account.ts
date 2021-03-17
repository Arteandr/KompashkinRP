import { Permissions } from "../../shared/enums/permissions";

/**
 * Используется для хранения информации о аккаунте
 * 
 * @export
 * @interface Account
 */
export interface Account {
    _id: any;
    discord: string;
    ips: Array<string>;
    hardware: Array<string>;
    lastLogin: number;
    permissionLevel: Permissions;
    banned: boolean;
    reason: string;
}