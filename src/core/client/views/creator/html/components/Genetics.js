Vue.component('tab-genetics', {
  props: ['data'],
  data() {
    return {
    }
  },
  template: `
<v-container id="scroll-target" class="main-container overflow-y-auto">
<v-btn color="#8b93d4" class="random-btn"> <img src="../icons/Random.svg" alt=""/> Рандом</v-btn>
<div class="settings-container">
  <span class="settings-container-title">
    Мать
  </span>
  <v-carousel hide-delimiters hide-delimiter-background height="150" class="settings-container-content">
    <v-carousel-item v-for="i in 22"  :key="i+23">
      <div class="card-block display-3">
        <img class="card-img" :src="\`../parents/parent_female_\${i - 1}.png\`" alt="female" />
      </div>
    </v-carousel-item>
  </v-carousel>
</div>
<div class="settings-container">
  <span class="settings-container-title">
    Отец
  </span>
  <v-carousel hide-delimiters hide-delimiter-background height="150" class="settings-container-content">
    <v-carousel-item v-for="i in 24"  :key="i+24">
      <div class="card-block display-3">
        <img class="card-img" :src="\`../parents/parent_male_\${i - 1}.png\`" alt="male" />
      </div>
    </v-carousel-item>
  </v-carousel>
</div>
<div class="settings-container">
  <span class="settings-container-title">
    Схожесть
  </span>
  <div class="settings-container-content picker">
    <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
      min="0" max="1" step="0.1" hide-details />
  </div>
</div>
<div class="settings-container">
  <span class="settings-container-title">
    Цвет кожи
  </span>
  <div class="settings-container-content picker">
    <v-slider color="#8b93d4" track-color="#bcc4ff" danse class="flex-grow-1" thumb-label ticks="always" type="range"
      min="0" max="1" step="0.1" hide-details />
  </div>
</div>
</v-container>
`
});