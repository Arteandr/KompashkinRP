import * as alt from "alt-server";
import * as sm from "simplymongo";
import { Events } from "../../shared/enums/events";
import { View_Events_Characters, View_Events_Creator } from "../../shared/enums/views";
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

    player.pendingCharacterSelect = true;

    if (characters.length <= 0) {
        console.log("characters not found :c");
        handleNewCharacter(player);
        return;
    }

    const { x, y, z } = DEFAULT_CONFIG.CHARACTER_SELECT_POS;

    player.currentCharacters = characters;
    player.rot = { ...DEFAULT_CONFIG.CHARACTER_SELECT_ROT } as alt.Vector3;
    playerFuncs.safe.setPosition(player, x, y, z);

    alt.setTimeout(() => {
        alt.emitClient(player, View_Events_Characters.Show, characters);
    }, 1000);
}


export function handleNewCharacter(player: alt.Player) {
    if (player.currentCharacters && player.currentCharacters.length >= DEFAULT_CONFIG.PLAYER_MAX_CHARACTER_SLOTS) return;

    let totalCharacters = 0;
    if (player.currentCharacters) {
        totalCharacters = player.currentCharacters.length;
    }

    const pos = { ...DEFAULT_CONFIG.CHARACTER_CREATOR_POS };

    player.rot = { ...DEFAULT_CONFIG.CHARACTER_CREATOR_ROT } as alt.Vector3;
    playerFuncs.safe.setPosition(player, pos.x, pos.y, pos.z);
    alt.emitClient(player, View_Events_Characters.Done);

    alt.setTimeout(() => {
        alt.emitClient(player, View_Events_Creator.Show); // _oldCharacterData, _noDiscard, _noName
    }, 1000);

}

