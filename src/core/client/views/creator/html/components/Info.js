const nameRegex = new RegExp('^([A-Z][a-z]+_[A-Z][a-z]+)$');


Vue.component('tab-info', {
  props: ['data', 'infodata'],
  data() {
    return {
      firstName: '',
      lastName: '',
      age: 16,
      gender: 0,
      nameValid: false,
      ageValid: false,
      genderValid: false,
      isNameAvailable: false,
      genderChoise: ['Мужской', 'Женский']
    }
  },
  methods: {
    verifyAllCorrect() {
      if (!this.nameValid || !this.ageValid || !this.genderValid) {
        this.$root.$emit('isVerified', false);
        return;
      }

      this.$root.$emit('isVerified', true);
    },
    nameChanged(newValue) {
      newValue = newValue.target.value;

      if (!newValue) {
        return;
      }

      if (!nameRegex.exec(newValue)) {
        this.nameValid = false;
        this.infodata.name = newValue;
        return;
      }

      this.isNameAvailable = null;
      this.infodata.name = newValue;

      if ('alt' in window) {
        alt.emit('creator:CheckName', newValue);
        alt.emit('creator:DisableControls', false);
      }
    },
    handleNameAvailable(result) {
      this.isNameAvailable = result;

      if (!this.isNameAvailable) {
        this.nameValid = false;
        return;
      }

      this.nameValid = true;
      this.verifyAllCorrect();
    },
  },
  mounted() {
    this.name = this.infodata.name;
    this.age = this.infodata.age;
    this.gender = this.infodata.gender;

    if ('alt' in window) {
      alt.on('creator:IsNameAvailable', this.handleNameAvailable);
    }
  },
  template: `
<v-container id="scroll-target" class="main-container overflow-y-auto">

  <div class="settings-container">
    <span class="settings-container-title">
      Имя
    </span>
    {{isNameAvailable}}
    <div class="settings-container-content">
      <div class="input-container">
        <input type="text" v-model="firstName" />
      </div>
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Фамилия
    </span>
    <div class="settings-container-content">
      <div class="input-container">
        <input type="text" v-model="lastName" />
      </div>
    </div>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Возраст персонажа
    </span>
    <div class="settings-container-content">
      <div class="input-container">
        <input type="number" min="16" max="80" v-model="age" />
      </div>
    </div>
  </div>
  <div class="settings-container">
<span class="settings-container-title">
  Ваш пол
</span>
<v-carousel hide-delimiters hide-delimiter-background height="60" align="center" class="settings-container-content">
  <v-carousel-item v-for="(item, i) in genderChoise"  :key="i+22">
    <div class="card-block display-3">
      <span class="carousel-item">{{item}}</span>
    </div>
  </v-carousel-item>
</v-carousel>
</div>
</v-container>
`
})