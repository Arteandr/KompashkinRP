import * as alt from 'alt-client';
import * as native from "natives";
import { View_Events_Characters } from '../../../shared/enums/views';
import { Character } from '../../../shared/interfaces/Character';
import { View } from "../../extensions/view"

const url = `http://resource/client/views/characters/html/index.html`;
let view: View;

alt.log(`[VIEWS] Characters - Loaded`);
alt.onServer(View_Events_Characters.Show, handleShowCharacters);

async function handleShowCharacters(characters: Array<Character>): Promise<void> {
    view = await View.getInstance(url, true, false);

    view.emit("characters:set", characters);

    alt.toggleGameControls(false);
}
