import * as alt from "alt-server";
import { Database, getDatabase } from "simplymongo";
import { Permissions } from "../../../shared/enums/permissions";
import { Character, CharacterDefaults } from "../../../shared/interfaces/Character";
import { Account } from "../../interface/Account";
import emit from "./emit";

const db: Database = getDatabase();

/**
 * Устанавливает текущие данные об акаунте игрока
 * @param {alt.Player} p 
 * @param {Partial<Account> accountData 
 */
async function account(p: alt.Player, accountData: Partial<Account>): Promise<void> {
    if (!accountData.permissionLevel) {
        accountData.permissionLevel = Permissions.None;
        db.updatePartialData(accountData._id, { permissionLevel: Permissions.None }, 'accounts');
    }

    emit.meta(p, 'permissionLevel', accountData.permissionLevel);
    p.accountData = accountData;
}


/**
 * Используется для инициализации player.data со всеми данными о персонаже.
 * Перезаписывает все существующие данные игрока текущей сессии.
 * 
 * @param {Character} data
 */
function init(p: alt.Player, data: Character = null) {
    p.data = Object.assign({}, CharacterDefaults);

    if (data) {
        Object.keys(data).forEach(key => {
            p.data[key] = data[key];
        });
    }
}

/**
 * Используется для установки нескольких ключей в player.data игрока.
 * 
 * @param {{ [key: string]: any }} dataObject Объект всех свойств и значений.
 * @param {string} [targetDataName=''] Свойство внутри player.data* ОПЦИОНАЛЬНО.
 */
function updateByKeys(p: alt.Player, dataObject: { [key: string]: any }, targetDataName: string = '') {
    Object.keys(dataObject).forEach(key => {
        if (targetDataName !== '') {
            p.data[targetDataName][key] = dataObject[key];
        } else {
            p.data[key] = dataObject[key];
        }
    });
}

export default {
    account,
    init,
    updateByKeys
};