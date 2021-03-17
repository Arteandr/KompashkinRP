import * as alt from "alt-server";
import { Character } from "../../shared/interfaces/Character";

declare module "alt-server" {
    export interface Player {
        pendingLogin?: boolean;
        hasModel?: boolean;
        currentCharacters: Array<Character>;
        pendingCharacterEdit?: boolean;
        pendingNewCharacter?: boolean;
        pendingCharacterSelect?: boolean;

        // Данные игрока
        accountData?: Partial<Account>; // Текущий аккаунт
        data?: Partial<Character>; // Текущий выбранный пользователь

        // Анти
        asPosition?: alt.Vector3;
        acHealth?: number;
        acArmour?: number;

        // Статус эффекты
        nextDeathSpawn: number;
        nextPingTime: number;
        nextItemSync: number;

        // Информация на тулбаре
        lastToolbarData: { equipped: boolean; slot: number };

        // Глобальные данные
        gridSpace: number;
        currentWeather: string;

        // Информация о транспорте
        lastEnteredVehicleID: number;
        lastVehicleID: number;
    }
}