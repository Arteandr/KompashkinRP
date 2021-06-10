Vue.config.devtools = true;
Vue.prototype.window = window;

const app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      show: false,
      selection: 0,
      navOptions: ['Info', 'Genetics', 'Face', 'Hair', 'Overlays', 'Clothes'],
      data: {
        sex: 1,
        faceMother: 0,
        faceFather: 0,
        skinMother: 0,
        skinFather: 0,
        skinMix: 0.5,
        faceMix: 0.5,
        structure: new Array(20).fill(0),
        hair: 3,
        hairColor1: 1,
        hairColor2: 5,
        hairOverlay: '',
        facialHair: 29,
        facialHairColor1: 0,
        facialHairOpacity: 0,
        eyebrows: 0,
        eyebrowsOpacity: 1,
        eyebrowsColor1: 0,
        eyes: 0,
        opacityOverlays: [],
        colorOverlays: []
      },
      infoData: {
        age: 16,
        gender: 1,
        name: ''
      },
      validInfoData: false,
    }
  },
  computed: {
    getHeight: function () {
      return (this.window.innerHeight * 92.6) / 100
    },
    getTabComponent: function () {
      return `tab-${this.navOptions[this.selection].toLowerCase()}`;
    }
  },
  methods: {
    setData() {

      this.updateCharacter();
    },
    setReady() {
      if ('alt' in window) {
        alt.emit('creator:ReadyDone');
      }
    },
    nextTab() {
      if (this.selection + 1 >= 6) this.selection = 5;
      this.selection++
    },
    updateCharacter() {
      const isFemale = this.data.sex === 0;
      this.data.hairOverlay = isFemale ? femaleHairOverlays[this.data.hair] : maleHairOverlays[this.data.hair];

      if (isFemale) {
        this.data.facialHair = 30;
        this.data.facialHairOpacity = 0;
      }

      // Update Floats
      this.data.skinMix = parseFloat(this.data.skinMix);
      this.data.faceMix = parseFloat(this.data.faceMix);

      if ('alt' in window) {
        alt.emit('creator:Sync', this.data, true);
      }
    },

    isVerified(isValid) {
      this.validInfoData = isValid;
    }

  },
  mounted() {
    this.$root.$on('updateCharacter', this.updateCharacter);
    this.$root.$on('isVerified', this.isVerified);


    overlaysTemplateList.forEach((overlay) => {
      const overlayData = { ...overlay };
      overlayData.value = 0;
      delete overlayData.key;
      delete overlayData.max;
      delete overlayData.min;
      delete overlayData.label;
      delete overlayData.increment;

      this.data.opacityOverlays.push(overlayData);
    });

    colorOverlays.forEach((overlay) => {
      const overlayData = { ...overlay };
      overlayData.value = 0;
      delete overlayData.key;
      delete overlayData.max;
      delete overlayData.min;
      delete overlayData.label;
      delete overlayData.increment;

      this.data.colorOverlays.push(overlayData);
    });

    this.$nextTick(() => {
      if ('alt' in window) {
        alt.on('creator:Ready', this.setReady);
        alt.on('creator:SetData', this.setData);
        alt.emit('ready');
      } else {
        this.show = true;
      }
    });

    console.log(`Loaded Character Creator`);
  }
})