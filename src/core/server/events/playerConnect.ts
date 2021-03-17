import * as alt from "alt-server";

alt.on('playerConnect', handlePlayerConnect);


async function handlePlayerConnect(player: alt.Player): Promise<void> {
    alt.setTimeout(() => {
        if (!player || !player.valid) return;

        alt.log(`(${player.id}) ${player.name} подключен к серверу.`);

    }, 0)
}