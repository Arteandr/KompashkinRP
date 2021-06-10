Vue.component('tab-overlays', {
  props: ['data'],
  data() {
    return {
      colors: ['Red', 'Green', 'Blue', 'Orange', 'Test1', 'Test2', 'Test3'],
    }
  },
  template: `
  <v-container id="scroll-target" class="main-container overflow-y-auto">
  <div class="settings-container">
    <span class="settings-container-title">
      Пятна
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i + 170">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Возраст
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i + 150">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Солнце
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" align="center" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i + 130">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
    <span class="settings-container-title">
      Веснушки
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" class="settings-container-content">
      <v-carousel-item v-for="(color, i) in colors" :key="i + 110">
        <div class="card-block display-3">
          <span class="carousel-item">{{color}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</v-container>
  `})