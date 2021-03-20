import * as alt from "alt-server";

/**
 * Безопасно устанавливает позицию игрока
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @memberof SafePrototype
 */
function setPosition(player: alt.Player, x: number, y: number, z: number): void {
    if (!player.hasModel) {
        player.hasModel = true;
        player.spawn(x, y, z, 0);
        player.model = `mp_m_freemode_01`;
    }

    player.pos = new alt.Vector3(x, y, z);
}


export default {
    setPosition
}