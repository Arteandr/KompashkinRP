import * as alt from "alt-server";
import { Events } from "../../shared/enums/events";
import { DEFAULT_CONFIG } from "../config/main";
import { playerFuncs } from "../extensions/Player";

alt.on("playerConnect", handlePlayerConnect);

async function handlePlayerConnect(player: alt.Player): Promise<void> {
    if (!player || !player.valid) return;

    player.dimension = player.id + 1; // Устанавливаем уникальный виртуальный мир
    player.pendingLogin = true;

    const { x, y, z } = DEFAULT_CONFIG.PLAYER_NEW_SPAWN_POS;
    playerFuncs.safe.setPosition(player, x, y, z);

    alt.setTimeout(() => {
        alt.emitClient(player, Events.PLAYER_CONNECT);
    }, 500)
}