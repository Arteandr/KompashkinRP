import * as alt from "alt-server";
import { Events } from "../../../shared/enums/events";


/**
 * Синхронизирует локальные переменные текущего игрока
 * @param {alt.Player} p  
 * @param {string} key 
 * @param {any} value 
 */
function meta(p: alt.Player, key: string, value: any): void {
    alt.nextTick(() => {
        alt.emitClient(p, Events.SYSTEM_META_SET, key, value);
    });
}

export default {
    meta
}