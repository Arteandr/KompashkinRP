Vue.component('tab-clothes', {
  props: ['data'],
  data() {
    return {
      test: ['Red', 'Green', 'Blue', 'Orange', 'Test1', 'Test2', 'Test3'],
      maleTop: ['Майка(5)', 'Поло(9)', 'Рубашка(14)'],
      femaleTop: ['Футболка(6)', 'Водолазка(21)', 'Блузка(23)'],
      maleLegs: ['Серые низкие джинсы(1)', 'Белые спортивки(3)', 'Белые шорты(6)', 'Бордовые шорты(80)'],
      femaleLegs: ['Серые джинсы(0)', 'Короткие шорты(10)', 'Брюки с вырезами(44)', 'Черные джинсы(84)'],
      maleFeet: ['Кеды(1)', 'Тапки с носками(6)', 'Ботинки(14)', 'Тапки(16)'],
      femaleFeet: ['Кроссовки(1)', 'Кеды(3)', 'Тапки(5)', 'Туфли(29)'],

    }
  },
  template: `
  <v-container id="scroll-target" class="main-container overflow-y-auto">
  <div class="settings-container">
    <span class="settings-container-title">
      Верх
    </span>
    <v-carousel hide-delimiters hide-delimiter-background height="60" align="center" class="settings-container-content">
      <v-carousel-item v-for="(item, i) in femaleTop" :key="i+25">
        <div class="card-block display-3">
          <span class="carousel-item">{{item}}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="settings-container">
  <span class="settings-container-title">
    Низ
  </span>
  <v-carousel hide-delimiters hide-delimiter-background height="60" align="center" class="settings-container-content">
    <v-carousel-item v-for="(item, i) in femaleLegs"  :key="i+26">
      <div class="card-block display-3">
        <span class="carousel-item">{{item}}</span>
      </div>
    </v-carousel-item>
  </v-carousel>
</div>
<div class="settings-container">
<span class="settings-container-title">
  Обувь
</span>
<v-carousel hide-delimiters hide-delimiter-background height="60" align="center" class="settings-container-content">
  <v-carousel-item v-for="(item, i) in femaleFeet"  :key="i+27">
    <div class="card-block display-3">
      <span class="carousel-item">{{item}}</span>
    </div>
  </v-carousel-item>
</v-carousel>
</div>
</v-container>
  `})