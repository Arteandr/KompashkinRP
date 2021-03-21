Vue.config.devtools = true;
Vue.prototype.window = window;


const exampleCharacter = {
    _id: '5f7117a3fd8d0a66b02eb998',
    pos: { x: -734.5714111328125, y: -264.4747314453125, z: 37.03076171875 },
    cash: 25,
    bank: 50,
    firstName: "Nikita",
    lastName: "Blinov",
    level: 2,
    vip: "Premium",
    playedTime: 15,
    fraction: "FBI",
    rewardPoints: 0,
    info: {
        age: 18,
        gender: 'male'
    },
    appearance: {
        colorOverlays: [0, 0, 0],
        eyebrows: 0,
        eyes: 3,
        eyebrowsColor1: 4,
        eyebrowsOpacity: 1,
        faceMix: 0.5,
        facialHairOpacity: 1,
        faceFather: 44,
        faceMother: 38,
        facialHair: 29,
        facialHairColor1: 0,
        hair: 68,
        hairColor1: 5,
        hairColor2: 8,
        hairOverlay: { collection: 'mpbiker_overlays', overlay: 'MP_Biker_Hair_002_M' },
        structure: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        opacityOverlays: [0, 0, 0, 0, 0, 0],
        sex: 1,
        skinFather: 16,
        skinMix: 0.1,
        skinMother: 23
    },
    account_id: '5f70bb5e829f5c3e80aa4192',
    position: { x: -740.6505737304688, y: -254.8219757080078, z: 37.03076171875 },
    characterIndex: 0
};

const app = new Vue({
    el: '#app',
    data() {
        return {
            characters: [],
            characterIndex: 0,
            maxCharacters: 3,
        }
    },
    methods: {
        handleSet(characters) {
            this.characterIndex = 0;
            this.characters = characters;
        },
    },
    mounted() {
        this.$nextTick(() => {
            if ("alt" in window) {
                alt.on("characters:set", this.handleSet);
                alt.emit("ready");
                this.characters = [
                    exampleCharacter]
            }
        })
    }
})