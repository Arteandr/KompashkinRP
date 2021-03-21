import * as alt from "alt-server";
import * as sm from "simplymongo";
import { Events } from "../../shared/enums/events";
import { Character } from "../../shared/interfaces/Character";
import { DEFAULT_CONFIG } from "../config/main";
import { playerFuncs } from "../extensions/Player";


const db: sm.Database = sm.getDatabase();


/**
 * Вызывается когда игроку необходимо выбрать персонажа.
 * @param {alt.Player} player 
 * @returns {void}
 */
export async function goToCharacterSelect(player: alt.Player): Promise<void> {
    const characters: Array<Character> = await db.fetchAllByField<Character>(
        "_id",
        player.accountData._id,
        'characters'
    );

    console.log(characters);

    player.pendingCharacterSelect = true;

    // if (characters.length <= 0) {
    //     console.log("characters not found :c");
    //     // handleNewCharacter(player);
    //     return;
    // }

    const { x, y, z } = DEFAULT_CONFIG.CHARACTER_SELECT_POS;

    player.currentCharacters = characters;
    player.rot = { ...DEFAULT_CONFIG.CHARACTER_SELECT_ROT } as alt.Vector3;
    playerFuncs.safe.setPosition(player, x, y, z);

    alt.setTimeout(() => {
        alt.emitClient(player, Events.VIEW_CHARACTERS_SHOW, characters);
    }, 1000);
}

