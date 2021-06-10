Vue.component('tab-hair', {
  props: ['data'],
  data() {
    return {
      swatches: [
        ['#00008b', '#a52a2a'],
        ['#b5651d', '#0000ff'],
        ['#800080', '#006400'],
        ['#add8e6', '#e60000'],
        ['#654321', '#ffc0cb'],
      ],
      colors: ['Red', 'Green', 'Blue', 'Orange'],
    }
  },
  template: `
<v-container id="scroll-target" class="main-container overflow-y-auto">
  <div class="settings-container">
    <span class="settings-container-title">
      Волосы
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="150" class="settings-container-content">
      <v-carousel-item v-for="i in 37" :key="i+100">
        <div class="card-block display-3">
          <img class="card-img" :src="\`../maleHair/MaleHair_\${i - 1}.png\`" alt="male" />
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Цвет волос
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i+200">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Борода
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i+300">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Цвет бороды
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" align="center" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i+400">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Брови
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i+500">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Цвет бровей
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" align="center" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i+600">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</v-container>
`})