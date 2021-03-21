import * as alt from 'alt-client';
import * as native from "natives";
import { Events } from '../../../shared/enums/events';
import { Character } from '../../../shared/interfaces/Character';
import { View } from "../../extensions/view"

const url = `http://resource/client/views/characters/html/index.html`;
let view: View;

alt.log(`[VIEWS] Characters - Loaded`);
alt.onServer(Events.VIEW_CHARACTERS_SHOW, handleShowCharacters);

async function handleShowCharacters(characters: Array<Character>): Promise<void> {
    view = await View.getInstance(url, true, false);

    view.emit("characters:set", characters);

    alt.toggleGameControls(false);
}
