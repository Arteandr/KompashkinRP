import * as alt from "alt-server";
import * as sm from "simplymongo"
import { singleton } from "tsyringe";
import { Events } from "../../shared/enums/events";
import { Permissions } from "../../shared/enums/permissions";
import { encryptPassword, verifyPassword } from "../extensions/encryption";
import { playerFuncs } from "../extensions/Player";
import { Account } from "../interface/Account";
import logger from "../utility/logger";
import { goToCharacterSelect } from "../views/characters";

const db: sm.Database = sm.getDatabase();

@singleton()
export class LoginService {
    async login(player: alt.Player, username: string, password: string): Promise<void> {
        delete player.pendingLogin;
        let accountData: Partial<Account> | null = await db.fetchData<Account>('login', username, 'accounts');

        if (!accountData) {
            alt.emitClient(player, Events.PLAYER_ACCOUNT_ERROR, `Указаный аккаунт не найден.`);
            return;
        }

        if (!verifyPassword(password, accountData.password)) {
            alt.emitClient(player, Events.PLAYER_ACCOUNT_ERROR, `Вы ввели неверные данные.`);
            return;
        }

        await playerFuncs.dataUpdater.account(player, accountData);
        goToCharacterSelect(player);
    }

    async register(player: alt.Player, username: string, password: string) {
        let accountData: Partial<Account> | null = await db.fetchData<Account>('login', username, 'accounts');
        let social: Partial<Account> | null = await db.fetchData<Account>('social', parseInt(player.socialID), 'accounts');

        if (social !== null) {
            alt.emitClient(player, Events.PLAYER_ACCOUNT_ERROR, `Ваш Social Club уже используется.`);
            return;
        }

        if (accountData !== null) {
            alt.emitClient(player, Events.PLAYER_ACCOUNT_ERROR, `Указаный логин уже используется.`);
            return;
        }


        const data: Account = {
            social: parseInt(player.socialID),
            login: username,
            password: encryptPassword(password),
            ips: [player.ip],
            characters: [],
            hardware: [player.hwidHash, player.hwidExHash],
            permissionLevel: Permissions.None,
            banned: false,
            registerDate: new Date()
        }

        const dbData = await db.insertData<Account>(data, `accounts`, true);

    }
}