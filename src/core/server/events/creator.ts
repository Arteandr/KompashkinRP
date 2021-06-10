import * as alt from "alt-server";
import * as sm from "simplymongo";
import { View_Events_Creator } from "../../shared/enums/views";
import { Character } from "../../shared/interfaces/Character";


const db: sm.Database = sm.getDatabase();


alt.onClient(View_Events_Creator.Done, handleCreatorDone);
alt.onClient(View_Events_Creator.AwaitModel, handleAwaitModel);
alt.onClient(View_Events_Creator.AwaitName, handleAwaitNameValid);


function handleCreatorDone() {
    throw new Error("Function not implemented.");
}

async function handleAwaitModel(player: alt.Player, characterSex: number, shouldTPose: boolean): Promise<void> {
    player.model = characterSex === 0 ? 'mp_f_freemode_01' : 'mp_m_freemode_01';
    player.pos = player.pos;
    alt.emitClient(player, View_Events_Creator.AwaitModel, shouldTPose);
}

async function handleAwaitNameValid(player: alt.Player, name: string): Promise<void> {
    const result = await db.fetchData<Character>('name', name, 'characters');

    if (!result) {
        alt.emitClient(player, View_Events_Creator.AwaitName, true); // Yes the name is available.
        return;
    }

    alt.emitClient(player, View_Events_Creator.AwaitName, false); // No the name is not available.
}