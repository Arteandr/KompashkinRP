import * as alt from "alt-client";
import { Meta } from "./Meta";

declare module "alt-client" {
    export interface Player {
        // Используется для хранения данных пользователя с сервера
        meta: Partial<Meta>;

        // Проверка на открытые окна
        isMenuOpen: boolean;
        isChatOpen: boolean;
        isActionMenuOpen: boolean;

        // время 
        inVisiontime: number | null;

        isInteractionOn: boolean;

        closestInteraction: {
            type: string;
            position: alt.Vector3
        };
    }
}