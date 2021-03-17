import * as alt from "alt-server";
import { Character, CharacterDefaults } from "../../../shared/interfaces/Character";
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
    init,
    updateByKeys
};