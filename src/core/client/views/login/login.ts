import * as alt from 'alt-client';
import * as native from "natives";
import { Events } from '../../../shared/enums/events';
import { View } from "../../extensions/view"

const url = `http://resource/client/views/login/html/index.html`;
let view: View;

alt.log(`[VIEWS] Login - Loaded`);
alt.onServer(Events.PLAYER_CONNECT, handlePlayerConnect);
alt.onServer(Events.PLAYER_ACCOUNT_ERROR, error);

async function handlePlayerConnect() {
    view = await View.getInstance(url, true, false, true);
    view.on("try_register", (u: string, p: string) => alt.emitServer(Events.PLAYER_PENDING_REGISTER, u, p));
    view.on("try_login", (u: string, p: string) => alt.emitServer(Events.PLAYER_PENDING_LOGIN, u, p));
    alt.toggleGameControls(false);
}

function error(message: string) {
    if (!view) return;

    view.emit("error", message);
}