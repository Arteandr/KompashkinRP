import * as alt from "alt-server";
import { container } from "tsyringe";
import { Events } from "../../shared/enums/events";
import { LoginService } from "../services/login.service";

const loginInstance = container.resolve(LoginService);

alt.onClient(Events.PLAYER_PENDING_LOGIN, handlerLogin);
alt.onClient(Events.PLAYER_PENDING_REGISTER, handlerRegister);

async function handlerLogin(p: alt.Player, username: string, password: string) {
    await loginInstance.login(p, username, password);
}

async function handlerRegister(p: alt.Player, username: string, password: string) {
    await loginInstance.register(p, username, password);
}